import React, { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0)
  
  function handleButtonClick() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Header title="Hello, otherworldly!" />
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Rise</button>
    </div>
  )
}

export default App
