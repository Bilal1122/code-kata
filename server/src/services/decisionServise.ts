import { BalanaceSheet } from '../models'

type Props = {
  buisnessName: string;
  establishedYear: number;
  balanceSheet: BalanaceSheet[]
  loanAmount: number
}

type Response = {
  buisnessName: string;
  establishedYear: number;
  profitLossSummary: { [key: string]: number };
  preAssessment: number
}

export default class DecisionService {

  private getProfitLossSummary(balanceSheet: BalanaceSheet[]): { [key: string]: number } {
    return balanceSheet.reduce((obj, { year, profitOrLoss }) => {
      obj[year] ? obj[year] += profitOrLoss : obj[year] = profitOrLoss
      return obj
    }, {} as { [key: string]: number })
  }

  async call({ buisnessName, establishedYear, balanceSheet, loanAmount }: Props): Promise<Response> {
    const hasMadeProfit = balanceSheet.some(({ profitOrLoss }) => profitOrLoss > 0);
    const averageAssets = balanceSheet.reduce((acc, r) => acc + r.assetsValue, 0) / balanceSheet.length;
    const profitLossSummary = this.getProfitLossSummary(balanceSheet)
    let preAssessment = 20;

    if (hasMadeProfit) {
      preAssessment = 60
    } else if (averageAssets > loanAmount) {
      preAssessment = 100
    }

    return {
      buisnessName,
      establishedYear,
      profitLossSummary,
      preAssessment
    }
  }
}
