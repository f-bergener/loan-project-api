import { Module } from '@nestjs/common';
import { LoanDataController } from './loan-data.controller';
import { LoanDataService } from './loan-data.service';

@Module({
  controllers: [LoanDataController],
  providers: [LoanDataService],
})
export class LoanDataModule {}
