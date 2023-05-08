import { BalanaceSheet } from '../models'

export default class BalanceSheetService {

  private balanceSheet: BalanaceSheet[] = [
    { year: 2020, month: 12, profitOrLoss: 250000, assetsValue: 1234 },
    { year: 2020, month: 11, profitOrLoss: 1150, assetsValue: 5789 },
    { year: 2020, month: 10, profitOrLoss: 2500, assetsValue: 22345 },
    { year: 2020, month: 9, profitOrLoss: -187000, assetsValue: 223452 }
  ]

  private getBalanceSheet(provider: string): BalanaceSheet[] {
    switch (provider) {
      case 'Xero':
        return this.balanceSheet;
      case 'MYOB':
        return this.balanceSheet;
      default:
        throw new Error("unknown provider")
    }
  }

  async getData(provider: string): Promise<BalanaceSheet[]> {
    if (!provider) {
      throw new Error("provider cannot be empty")
    }
    return this.getBalanceSheet(provider)
  }
}
