
export enum Provider {
  Xero = 'Xero',
  MYOB = 'MYOB'
}

export type LoanApplication = {
  buisnessName?: string,
  establishedYear?: number,
  provider?: Provider,
  loanAmount?: number
}

export type BalanaceSheet = {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number
}

export type ApplicationDecision = {
  buisnessName: string;
  establishedYear: number;
  profitLossSummary: { [key: string]: number };
  preAssessment: number
}
