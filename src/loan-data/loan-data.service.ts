import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { DataSource } from 'typeorm';
import { GetLoanDataDto } from './dto/get-loan-data.dto';

@Injectable()
export class LoanDataService {
  constructor(private dataSource: DataSource) {}

  async getAllLoanData(): Promise<GetLoanDataDto> {
    const loanData = await this.dataSource.query(
      'select count(id) as total_loans, avg(interest_rate) as average_interest_rate, sum(unpaid_principal) as total_unpaid_principal, sum(principal_interest_payment) as total_principal_interest_payment, sum(original_principal) as total_original_principal from public.loans',
    );
    return plainToClass(GetLoanDataDto, loanData);
  }

  async getAllLoanDataByPool(pool: string): Promise<GetLoanDataDto> {
    const loanData = await this.dataSource.query(
      `select count(id) as total_loans, avg(interest_rate) as average_interest_rate, sum(unpaid_principal) as total_unpaid_principal, sum(principal_interest_payment) as total_principal_interest_payment, sum(property_value) as total_property_value, sum(original_principal) as total_original_principal from public.loans where pool = '${pool}'`,
    );
    return plainToClass(GetLoanDataDto, loanData);
  }
}
