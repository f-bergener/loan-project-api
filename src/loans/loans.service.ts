import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Loan } from './loan.entity';
import { Repository } from 'typeorm';
import { LoanData, UpdateLoanData } from './loans.types';
import { plainToClass } from 'class-transformer';
import { GetLoanResponseDto } from './dto/get-loan-response.dto';

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan)
    private loansRepository: Repository<Loan>,
  ) {}

  async getLoan(id: string): Promise<GetLoanResponseDto[] | string> {
    try {
      const loans = await this.loansRepository.find({
        where: {
          id,
        },
        relations: { pool: true },
        take: 1,
      });
      if (loans) {
        return loans.map((loan) => plainToClass(GetLoanResponseDto, loan));
      } else {
        return 'Loan not found';
      }
    } catch (error) {
      console.log(error);
      return 'Error finding loan';
    }
  }

  async addLoan(newLoanData: LoanData): Promise<Loan | string> {
    const loan = new Loan();

    loan.loanId = newLoanData.loanId;
    loan.borrowerLastName = newLoanData.borrowerLastName;
    loan.borrowerFirstName = newLoanData.borrowerFirstName;
    loan.propertyStreetAddress = newLoanData.propertyStreetAddress;
    loan.propertyCity = newLoanData.propertyCity;
    loan.propertyState = newLoanData.propertyState;
    loan.propertyZip = newLoanData.propertyZip;
    loan.originationDate = newLoanData.originationDate;
    loan.originalPrincipal = newLoanData.originalPrincipal;
    loan.unpaidPrincipal = newLoanData.unpaidPrincipal;
    loan.interestRate = newLoanData.interestRate;
    loan.principalInterestPayment = newLoanData.principalInterestPayment;
    loan.propertyValue = newLoanData.propertyValue;

    try {
      const newLoan = await this.loansRepository.save(loan);
      return newLoan;
    } catch (error) {
      return 'Error adding pool';
    }
  }

  async updateLoan(updateLoanData: UpdateLoanData): Promise<Loan | string> {
    try {
      const loan = await this.loansRepository.findOneBy({
        id: updateLoanData.id,
      });
      if (loan) {
        const loanData = { ...loan, ...updateLoanData };
        const updatedLoan = await this.loansRepository.save(loanData);
        return updatedLoan;
      } else {
        return 'Pool not found';
      }
    } catch (error) {
      return 'Error updating pool';
    }
  }

  async getLoans(): Promise<GetLoanResponseDto[] | string> {
    try {
      const loans = await this.loansRepository.find({
        relations: { pool: true },
      });
      if (loans.length) {
        return loans.map((loan) => plainToClass(GetLoanResponseDto, loan));
      } else {
        return 'Loans not found';
      }
    } catch (error) {
      return 'Error finding Loans';
    }
  }

  async getLoansByPoolId(
    poolId: string,
  ): Promise<GetLoanResponseDto[] | string> {
    try {
      const loans = await this.loansRepository.findBy({ poolId });
      if (loans.length) {
        return loans.map((loan) => plainToClass(GetLoanResponseDto, loan));
      } else {
        return 'Loans not found';
      }
    } catch (error) {
      return 'Error finding loans';
    }
  }

  async upsertLoan(loanData: LoanData): Promise<string> {
    try {
      await this.loansRepository.upsert(loanData, ['loanId']);
      return 'Successfully upserted loan';
    } catch (error) {
      return 'Error upserting loan';
    }
  }
}
