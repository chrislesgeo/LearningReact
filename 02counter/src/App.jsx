import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15)

  // let counter = 15;

  const AddValue = function(){
    setCounter(counter+1);
  }
  const removeValue = function(){
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Chris is learning React</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={AddValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
