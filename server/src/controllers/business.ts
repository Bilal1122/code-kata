import express from 'express';
// utils
import { errorHandler } from '../utils/errorHandler';
// services
import BalanceSheetService from '../services/balanceSheetService';
// constants
import { BALANCE_SHEET_ROUTE } from '../constants/routes'

const router = express.Router();

router.get(BALANCE_SHEET_ROUTE, errorHandler(async (req, res) => {
  const businessId = req.params.id;
  const { provider } = req.query;
  if (businessId) { // or business not found
    const balanceSheet = await new BalanceSheetService().getData(provider as string)
    res.status(200).send({ success: true, data: balanceSheet })
  } else {
    throw new Error("business not found")
  }
}));

export default router
