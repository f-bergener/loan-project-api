import { Expose, Transform } from 'class-transformer';

export class GetLoanDataDto {
  @Expose({ name: 'total_loans' })
  @Transform(({ value }) => Number(value))
  totalLoans: number;

  @Expose({ name: 'average_interest_rate' })
  @Transform(({ value }) => Number(value))
  averageInterestRate: number;

  @Expose({ name: 'total_unpaid_principal' })
  @Transform(({ value }) => Number(value))
  totalUnpaidPrincipal: number;

  @Expose({ name: 'total_principal_interest_payment' })
  @Transform(({ value }) => Number(value))
  totalPrincipalInterestPayment: number;

  @Expose({ name: 'total_property_value' })
  @Transform(({ value }) => Number(value))
  totalPropertyValue: number;

  @Expose({ name: 'total_original_principal' })
  @Transform(({ value }) => Number(value))
  totalOriginalPrincipal: number;
}
