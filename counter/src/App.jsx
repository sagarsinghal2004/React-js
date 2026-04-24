import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //useState Hook
  const [counter, setCounter] = useState(0); 

  //let counter = 15

  //increments value of counter
  const addValue = () => {
    
    setCounter(counter+1)
    
  }
  
  //decrements value of counter
  const subtractValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value: {counter} </h2>
      <button onClick={addValue}>Increase Value</button>
      <button onClick={subtractValue}>Decrease Value</button>
      
    </>
  )
}

export default App
