import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Food from './Components/Food'
import ColorSelector from './Components/ColorSelector'
import ChangingStateofarray from './Components/ChangingStateofarray'
import Displaytask from './Components/Displaytask'
import Todolist from './Components/Todolist'
import UseEffect from './Components/UseEffect'
import DigitalClock from './Components/DigitalClock'
import UseContext from './Components/UseContextUses'
import UseContextUses from './Components/UseContextUses'
import UserefUses from './Components/UserefUses'
import StopWatch from './Components/StopWatch'
import Mystopwatch from './Components/Mystopwatch'



function App() {
  
  const [task, settask] = useState(["Mazher", "alam"]);
  function handleinputchange(value) {
    settask([...task, value]);
  }

  const handledelete = (item) => {
    const newtask = task.filter((e, i) => i != item)
    settask(newtask)
  }
  return (
    <>
      {/* <Header></Header>
     <Footer></Footer>
    <Food></Food> */}
      {/* <ColorSelector></ColorSelector>
    <ChangingStateofarray></ChangingStateofarray> */}
      {/* <Todolist handleinputchange={handleinputchange}></Todolist>
    <Displaytask handledeleteitem={handledelete} task={task}></Displaytask> */}
      {/* <UseEffect></UseEffect> */}
      {/* <DigitalClock></DigitalClock> */}
      {/* <UseContextUses></UseContextUses> */}
      {/* <UserefUses></UserefUses> */}
      <StopWatch></StopWatch>
      <Mystopwatch></Mystopwatch>
    </>
  )
}

export default App
