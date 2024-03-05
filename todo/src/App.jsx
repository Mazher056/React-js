import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Todoitems from './Components/Todoitems'
import Displaytodo from './Components/Displaytodo'
import Addtodo from './Components/Addtodo'
import Heading from './Components/Heading'
import { todoitem } from './Store/Todoitem'



export const userCOntext = createContext()

function App() {
  const arr = [
    {
      name: "Good job",
      date: "22-34-2323"
    },
    {
      name: "Good job1",
      date: "433-34-23232343"
    },
  ]
  const deletetodo = (name) => {
    const update = task.filter(e => e.name !== name)
    settask(update)
  }

  const addtodo = (name, date) => {
    const update = [...task, { name, date }]
    settask(update)
  }
  const [task, settask] = useState(arr)


  return (
    <>
      <todoitem.Provider value={{
        task,
        addtodo,
        deletetodo}}>
        <Heading></Heading>
        <Addtodo></Addtodo>
        <Displaytodo ></Displaytodo>
      </todoitem.Provider>
    </>
  )
}
export default App
