import React from 'react'

export default function UserInput({handleChangeEvent}) {
  
  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type='number' onChange={(event) => handleChangeEvent("initialInvestment", event.target.value)} required/>
            </p>
            <p>
                <label>Annual (year) investment</label>
                <input type='number' onChange={(event) => handleChangeEvent("annualInvestment", event.target.value)} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input type='number' onChange={(event) => handleChangeEvent("expectedReturn", event.target.value)} required/>
            </p>
            <p>
                <label>Duration</label>
                <input type='number' onChange={(event) => handleChangeEvent("duration", event.target.value)} required/>
            </p>
        </div>
        
    </section>
  )
}
