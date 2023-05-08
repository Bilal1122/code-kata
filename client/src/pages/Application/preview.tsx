import React from "react";
// components
import Table from "../../components/table";
import Button from "../../components/button";
// types
import { LoanApplication, BalanaceSheet } from "../../types/global";

interface PreviewProps {
  application: LoanApplication;
  balanceSheet: BalanaceSheet[];
  loading?: boolean;
  onSubmit: () => void;
  onBackClick?: () => void
}

const tableHeaders = [
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' },
  { label: 'Assets Value', value: 'assetsValue' },
  { label: 'Profit/Loss', value: 'profitOrLoss' }
]

const Preview = ({ application, balanceSheet, loading, onSubmit, onBackClick }: PreviewProps) => {
  return (
    <>
      <h1 className="font-bold text-[20px] mb-4"> Preview </h1>
      <div className="flex mb-4">
        <div className="w-[350px]">
          Business Name: <b>{application.buisnessName}</b>
          <br />
          Business established in year: <b>{application.establishedYear}</b>
        </div>
        <div>
          Loan Amount: <b>{application.loanAmount}</b>
          <br />
          Provider: <b>{application.provider}</b>
        </div>
      </div>

      <h1 className="font-bold">Balance Sheet:</h1>
      <Table headers={tableHeaders} cells={balanceSheet} />

      <div className="mt-6 flex justify-end">
        <Button label="Back" type="submit" loading={loading} onClick={onBackClick} classname="mr-4 !bg-white text-blue-700 border border-blue-700" />
        <Button label="Submit" type="submit" loading={loading} onClick={onSubmit} />
      </div>
    </>
  )
}

export default Preview;
