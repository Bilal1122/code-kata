import React, { useState } from "react";
import { useParams } from 'react-router-dom'
// components
import Form from "./form";
import Preview from "./preview";
import Decision from "./decision";
// types
import { LoanApplication, BalanaceSheet, Provider, ApplicationDecision } from "../../types/global";
// apis
import { fetchBusinessBalanceSheet } from "../../actions/business";
import { submitApplication } from "../../actions/application";

const Application = () => {
  const [application, setApplication] = useState<LoanApplication>()
  const [balanceSheet, setBalanceSheet] = useState<BalanaceSheet[]>([])
  const [decision, setDecision] = useState<ApplicationDecision>()
  const [preview, setPreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  const fetchBalanceSheet = async (e: Event) => {
    e.preventDefault()
    if (!application?.provider) {
      alert("Provider cannot be empty!")
    }
    setLoading(true)
    try {
      const { data } = await fetchBusinessBalanceSheet({ provider: application.provider })
      setBalanceSheet(data.data)
      setPreview(true)
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false)
    }
  }

  const onChangeHandler = (e: any) => {
    const { id, value } = e.target;
    setApplication({ ...application, ...{ [id]: value } })
  }

  const onSubmit = async () => {
    setLoading(true)
    try {
      const { data } = await submitApplication({ id, data: application })
      setDecision(data.data)
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] bg-white rounded p-4">
        {

          decision ?
            <Decision decision={decision} />
            : preview ?
              <Preview
                application={application}
                balanceSheet={balanceSheet}
                loading={loading}
                onSubmit={onSubmit}
                onBackClick={() => setPreview(false)}
              />
              : <Form
                application={application}
                loading={loading}
                onNextClick={fetchBalanceSheet}
                onChange={onChangeHandler}
              />
        }
      </div>
    </div>
  )
}

export default Application;
