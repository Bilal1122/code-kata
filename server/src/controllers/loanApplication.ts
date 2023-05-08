import express from 'express';
import { v4 as uuidv4 } from 'uuid';
// utils
import { errorHandler } from '../utils/errorHandler';
// services
import DecisionService from '../services/decisionServise';
import BalanceSheetService from '../services/balanceSheetService';
// constants
import { NEW_APPLICATION_ROUTE, SUBMIT_APPLICATION_ROUTE } from '../constants/routes'

const router = express.Router();

router.post(NEW_APPLICATION_ROUTE, errorHandler(async (_, res) => {
  // at this stage the application can have open/inProgress status;
  res.status(200).send({ success: true, data: { applicationId: uuidv4() } })
}));

router.patch(SUBMIT_APPLICATION_ROUTE, errorHandler(async (req, res) => {
  // at this stage the application will be updated to submitted status.=
  const requiredFields = ['provider', 'loanAmount', 'buisnessName', 'establishedYear']
  const emptyFields = requiredFields.filter((key) => !req.body[key])

  if (!!emptyFields.length) {
    throw new Error(`${emptyFields.join(', ')} cannot be empty`)
  }

  const { provider, loanAmount, buisnessName, establishedYear } = req.body;

  const balanceSheet = await new BalanceSheetService().getData(provider)
  const result = await new DecisionService().call({ buisnessName, establishedYear, balanceSheet, loanAmount })
  res.status(200).send({ success: true, data: result })
}));

// this is with an intension of saving business info in application with balance-sheet data fetch.
// router.patch("/loan/application/:id/balance-sheet", errorHandler(async (req, res) => {
//   // steps:
//   // 1. validation - check if application with applicationId available
//   // 2. update application with the details and change status to in-progress.
//   // 3. get balance sheet (below)
//   const { provider } = req.body;
//   try {
//     const balanceSheet = await new BalanceSheetService().getData(provider)
//     res.status(200).send({ success: true, data: balanceSheet })
//   } catch (err) {
//     throw err
//   }
// }));

export default router
