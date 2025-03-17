import { Controller, Get, Param } from '@nestjs/common';
import { LoanDataService } from './loan-data.service';
import { GetLoanDataDto } from './dto/get-loan-data.dto';

@Controller('loanData')
export class LoanDataController {
  constructor(private readonly loanDataService: LoanDataService) {}

  @Get()
  getAllLoanData(): Promise<GetLoanDataDto> {
    return this.loanDataService.getAllLoanData();
  }

  @Get('pool/:pool')
  getAllLoanDataByPool(@Param() params: any): Promise<GetLoanDataDto> {
    return this.loanDataService.getAllLoanDataByPool(params.pool);
  }
}
