import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
// components
import Button from "../components/button";
// api
import { initialiseApplication } from "../actions/application";

const Home = () => {
  const [initialisingApplication, setInitialisingApplication] = useState(false)
  const [error, setError] = useState('')
  const navigation = useNavigate()

  const onStartApplicationClick = async () => {
    setInitialisingApplication(true)
    try {
      const { data } = await initialiseApplication()
      navigation(`/application/${data.data.applicationId}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setInitialisingApplication(false)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Button
        label="Start Loan Application"
        onClick={onStartApplicationClick}
        loading={initialisingApplication}
      />
      <div className="mt-2 text-red-700">{error}</div>
    </div>
  )
}

export default Home;
