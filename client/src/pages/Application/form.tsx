import React, { useMemo } from "react";
// components
import TextField from "../../components/input";
import Button from "../../components/button";
import Select from "../../components/select";
// types
import { LoanApplication, Provider } from "../../types/global";

type Props = {
  application: LoanApplication;
  loading?: boolean
  onChange: (e: any) => void;
  onNextClick: (e: any) => void
}

const Form = ({ application, loading = false, onChange, onNextClick }: Props) => {
  const { buisnessName, establishedYear, loanAmount, provider } = application || {};

  const providerOptions = useMemo(() =>
    Object.values(Provider).map((str) => {
      return { label: str, value: str }
    }
    ), [])

  const submitDisabled = useMemo(() => {
    return !buisnessName || !establishedYear || !loanAmount || !provider
  }, [application])

  return (
    <form onSubmit={onNextClick}>
      <h1 className="font-bold text-[20px] mb-4"> Loan Application </h1>
      <div className="flex gap-4 mb-4">
        <TextField label="Business Name" placeholder="Transport LTD" name="buisnessName" value={buisnessName} onChange={onChange} />
        <TextField label="Business established in year?" placeholder="1998" name="establishedYear" value={establishedYear} onChange={onChange} />
      </div>
      <div className="flex gap-4 mb-4">
        <TextField label="Loan amount" placeholder="2000" name="loanAmount" type={'number'} value={loanAmount} onChange={onChange} />
        <Select label="Select Provider" name="provider" placeholder="Select Provider" value={provider} options={providerOptions} onChange={onChange} />
      </div>
      <div className="mt-6 flex justify-end">
        <Button label="Next" type="submit" disabled={submitDisabled} loading={loading} />
      </div>
    </form>
  )
}

export default Form;