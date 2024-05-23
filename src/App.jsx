import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
            
  let [ counter, setcounter] = useState (15);
  const addValue =()=>{
    counter+=1;
    console.log(counter);
    setcounter(counter);
  }
  const delValue= ()=>{
    counter  -=1;
    console.log(counter);
    setcounter(counter);
  }
  return (
    <>
       <h2>Khushi is good Girl</h2>
       <h2>counter Value : <span>{counter}</span></h2>
       <button onClick={addValue}>Add</button>
       <button onClick={delValue}>Delete</button>
    </>
  )
}

export default App
