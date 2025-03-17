import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoansModule } from './loans/loans.module';
import { Loan } from './loans/loan.entity';
import { LoanDataModule } from './loan-data/loan-data.module';
import { PoolsModule } from './pools/pools.module';
import { Pool } from './pools/pool.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `${process.env.NODE_ENV === 'production' ? '.env' : '.development.env'}`,
      ],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT!),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      entities: [Loan, Pool],
      synchronize: false,
      logging: true,
      ssl: process.env.NODE_ENV === 'production' ? true : false,
    }),
    LoansModule,
    LoanDataModule,
    PoolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
