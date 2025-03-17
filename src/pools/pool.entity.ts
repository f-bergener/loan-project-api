import { Entity, Column, BaseEntity, PrimaryColumn, OneToMany } from 'typeorm';
import { PoolInterface } from './interface/pool.interface';
import { Loan } from 'src/loans/loan.entity';

@Entity({ name: 'pools', schema: 'public' })
export class Pool extends BaseEntity implements PoolInterface {
  @PrimaryColumn({ name: 'id', type: 'uuid', unique: true })
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 40 })
  name: string;

  @OneToMany(() => Loan, (loan) => loan.pool)
  loans: Loan[];
}
