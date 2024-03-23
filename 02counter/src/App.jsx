import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App()
{
  const [counter,setCounter] = useState(10)
  let [list, newno] = useState(10)

  const add =()=>
  {
    console.log("clicked",counter);
    setCounter(counter +1)
    
  }
  const sub =()=>
  {
    console.log("clicked",list);
    newno(list -1)

  }
  return(
  <>
      <h1>Hello Prajwal</h1>
      <button onClick={add}>The New Number Is {counter} </button>
      <button onClick={sub}>The Substracted Number Is{list} </button>
  </>
  )
}


export default App
