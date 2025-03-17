import {
  Entity,
  Column,
  BaseEntity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { LoanInterface } from './interface/loan.interface';
import { Pool } from 'src/pools/pool.entity';

@Entity({ name: 'loans', schema: 'public' })
export class Loan extends BaseEntity implements LoanInterface {
  @PrimaryColumn({ name: 'id', type: 'uuid', unique: true })
  id: string;

  @Column({ name: 'pool_id', type: 'uuid' })
  poolId: string;

  @ManyToOne(() => Pool, (pool) => pool.loans)
  @JoinColumn({ name: 'pool_id', referencedColumnName: 'id' })
  pool: Pool;

  @Column({ name: 'loan_id', type: 'varchar', unique: true })
  loanId: string;

  @Column({ name: 'borrower_last_name', type: 'varchar', length: 40 })
  borrowerLastName: string;

  @Column({ name: 'borrower_first_name', type: 'varchar', length: 40 })
  borrowerFirstName: string;

  @Column({ name: 'property_street_address', type: 'varchar', length: 40 })
  propertyStreetAddress: string;

  @Column({ name: 'property_city', type: 'varchar', length: 20 })
  propertyCity: string;

  @Column({ name: 'property_state', type: 'varchar', length: 2 })
  propertyState: string;

  @Column({ name: 'property_zip', type: 'varchar', length: 10 })
  propertyZip: string;

  @Column({ name: 'origination_date', type: 'date' })
  originationDate: Date;

  @Column({
    name: 'original_principal',
    type: 'numeric',
    precision: 20,
    scale: 11,
  })
  originalPrincipal: number;

  @Column({
    name: 'unpaid_principal',
    type: 'numeric',
    precision: 20,
    scale: 11,
  })
  unpaidPrincipal: number;

  @Column({ name: 'interest_rate', type: 'numeric', precision: 4, scale: 2 })
  interestRate: number;

  @Column({
    name: 'principal_interest_payment',
    type: 'numeric',
    precision: 16,
    scale: 10,
  })
  principalInterestPayment: number;

  @Column({ name: 'property_value', type: 'numeric', precision: 20, scale: 11 })
  propertyValue: number;
}
