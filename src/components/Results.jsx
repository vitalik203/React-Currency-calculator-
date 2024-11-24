import React from 'react'

import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({inputUser}) {
    let result = "No value"

    if(inputUser){
        result = calculateInvestmentResults(inputUser)
        console.log(result);
        
    }
    return (<table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Inteterest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((el,i)=>{
          const totalInterest = el.valueEndOfYear - el.annualInvestment * el.year - inputUser.initialInvestment
          const totalAmountOfInvestment = el.valueEndOfYear - totalInterest
          return (
            <tr>
              <td>{el.year}</td>
              <td>{formatter.format(el.valueEndOfYear)}</td>
              <td>{formatter.format(el.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountOfInvestment)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>)
    
}
