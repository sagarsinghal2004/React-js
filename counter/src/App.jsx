import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //useState Hook
  const [counter, setCounter] = useState(0); 

  //let counter = 15

  //increments value of counter and stops after counter = 20
  const addValue = () => {
    if(counter < 20){
    setCounter(counter+1)
    }
  }
  
  //decrements value of counter and stops after counter = 0
  const subtractValue = () => {
    if(counter > 0){
    setCounter(counter-1)
    }
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
