import React from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../../components/button";
// types
import { ApplicationDecision } from "../../types/global";

interface DecisionProps {
  decision: ApplicationDecision
}

const Decision = ({ decision }: DecisionProps) => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="font-bold mb-4">Summary:</h1>
      <div> Business Name: <b>{decision.buisnessName}</b> </div>
      <div> Established Year: <b>{decision.establishedYear}</b> </div>
      <div> PreAssessment: <b>{decision.preAssessment}%</b> </div>
      <div> Profit Loss Summary: </div>
      <ul className="ml-4">
        {
          Object.keys(decision.profitLossSummary).map((year) => (
            <li key={year}> {year}: <b>{decision.profitLossSummary[year]}</b> </li>
          ))
        }
      </ul>
      <Button label="Back to Home Page" onClick={() => navigate('/')} classname="mt-6" />
    </div>
  )
}

export default Decision;