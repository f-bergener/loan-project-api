export type LoanData = {
  loanId: string;
  poolId: string;
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
};

export type UpdateLoanData = {
  id: string;
  poolId: string;
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
};
