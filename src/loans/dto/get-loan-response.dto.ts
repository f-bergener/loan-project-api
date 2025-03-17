import { Expose, Transform } from 'class-transformer';

export class GetLoanResponseDto {
  @Expose()
  id: string;

  @Expose()
  poolId: string;

  @Expose()
  @Transform(({ value }) => value.name)
  pool: string;

  @Expose()
  loanId: string;

  @Expose()
  borrowerLastName: string;

  @Expose()
  borrowerFirstName: string;

  @Expose()
  propertyStreetAddress: string;

  @Expose()
  propertyCity: string;

  @Expose()
  propertyState: string;

  @Expose()
  propertyZip: string;

  @Expose()
  originationDate: Date;

  @Expose()
  @Transform(({ value }) => Number(value))
  originalPrincipal: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  unpaidPrincipal: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  interestRate: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  principalInterestPayment: number;

  @Expose()
  @Transform(({ value }) => Number(value))
  propertyValue: number;
}
