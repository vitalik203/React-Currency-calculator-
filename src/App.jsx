import React from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"



function App() {
  const [userInput, setUserInput] = React.useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 12
  })
  console.log(userInput);
  
  const validValue = userInput.duration>=1

  function handleChange(currentValue, newValue){
    setUserInput(prevValue=>{
      return {
      ...prevValue,
      [currentValue]: +newValue 
    }
  })
  }
  return (
    <>
      <Header></Header>
      <UserInput handleChangeEvent={handleChange}></UserInput>
      {!validValue?(<p>Valid value</p>):<Results inputUser={userInput} />}
    </>
  )
}

export default App
