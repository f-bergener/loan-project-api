import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  controllers: [LoansController],
  providers: [LoansService],
})
export class LoansModule {}
