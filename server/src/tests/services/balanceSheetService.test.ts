import BalanceSheetService from '../../services/balanceSheetService';

describe('BalanceSheetService', () => {
  let balanceSheetService: BalanceSheetService;

  beforeEach(() => {
    balanceSheetService = new BalanceSheetService();
  });

  describe('getData', () => {
    it('should return balance sheet data for known provider - Xero', async () => {
      const data = await balanceSheetService.getData('Xero');
      expect(data).toHaveLength(4);
      expect(data[0]).toEqual({
        year: 2020,
        month: 12,
        profitOrLoss: 250000,
        assetsValue: 1234
      })
    });

    it('should return balance sheet data for known provider - MYOB', async () => {
      const data = await balanceSheetService.getData('MYOB');
      expect(data).toHaveLength(4);
      expect(data[0]).toEqual({
        year: 2020,
        month: 12,
        profitOrLoss: 250000,
        assetsValue: 1234
      })
    });

    it('should throw an error for unknown provider', async () => {
      await expect(balanceSheetService.getData('RandomProvider')).rejects.toThrow(
        'unknown provider',
      );
    });

    it('should throw an error for empty provider', async () => {
      await expect(balanceSheetService.getData('')).rejects.toThrow(
        'provider cannot be empty',
      );
    });
  });
});
