import { PoolInterface } from 'src/pools/interface/pool.interface';

export interface LoanInterface {
  id: string;
  pool: PoolInterface;
  // poolId: string;
  loanId: string;
  borrowerLastName: string;
  borrowerFirstName: string;
  propertyStreetAddress: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  originationDate: Date;
  originalPrincipal: number;
  unpaidPrincipal: number;
  interestRate: number;
  principalInterestPayment: number;
  propertyValue: number;
}
