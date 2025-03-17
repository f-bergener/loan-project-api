import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { LoansService } from './loans.service';
import { LoanInterface } from './interface/loan.interface';
import { LoanData, UpdateLoanData } from './loans.types';
import { GetLoanResponseDto } from './dto/get-loan-response.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Get(':id')
  getLoan(@Param() params: any): Promise<GetLoanResponseDto[] | string> {
    return this.loansService.getLoan(params.id);
  }

  @Post()
  upsertLoan(@Body() loanData: LoanData): Promise<LoanInterface | string> {
    return this.loansService.upsertLoan(loanData);
  }

  @Get()
  getLoans(): Promise<GetLoanResponseDto[] | string> {
    return this.loansService.getLoans();
  }

  @Get()
  getLoansByPoolId(
    @Query('poolId') poolId: string,
  ): Promise<GetLoanResponseDto[] | string> {
    return this.loansService.getLoansByPoolId(poolId);
  }
}
