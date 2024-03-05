import { createContext, useReducer, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Displaytodo from './Components/Displaytodo'
import Addtodo from './Components/Addtodo'
import Heading from './Components/Heading'
// import  Todoitem  from './Store/Todoitem'
import Todoitemcontextprovider from './Store/Todoitem'




function App() {

  
  //   const reducer = (state,action) => {
  //     let newarr = state;

  //    if(action.type === "Add"){
  //     const name =action.payload.name;
  //     const date =action.payload.date;
  //      newarr = [...state,{name,date}]
  //     }

  //     if(action.type === "Delete"){
  //       newarr = newarr.filter(e=> e.name !== action.payload);
  //     }
  //     return newarr;

  //   }


  
  // const [task, dispatch] = useReducer(reducer, []);

  // const deletetodo = (name) => {
  //   dispatch({type:"Delete",payload:name})
  // }

  // const addtodo = (name, date) => {
  //   dispatch({
  //     type: "Add",
  //     payload: {
  //       name, date
  //     }
  //   })
  // }


  return (
    <>
      <Todoitemcontextprovider>
        <Heading></Heading>
        <Addtodo></Addtodo>
        <Displaytodo ></Displaytodo>
      </Todoitemcontextprovider>
    </>
  )
}
export default App
