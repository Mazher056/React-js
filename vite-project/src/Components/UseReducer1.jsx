import React, { createContext, useReducer, useRef } from 'react'
import ListShowwithReducer from './ListShowwithReducer';

export const usertask = createContext();
export default function UseReducer1() {

  const reducer = (state, action) => {
    if (action.type === "Add") {
      return { list: [...state.list, newitem(action.payload)] }
    }
    if (action.type === "Toggle") {
        state.list.map((e,index)=>{
          if(action.payload == index){
            e.isCompleted = !e.isCompleted
          }
        })
        return {list:state.list}   
    }
    if(action.type === "Delete"){
       return {list:state.list.filter((e,index)=> index !== action.payload )}
     
    }
  }
  const newitem = (value) => {
    return { value: value, isCompleted: false }
  }

  const [state, dispatch] = useReducer(reducer, { list: [] })
  const input = useRef(null);

  function handletask() {
    dispatch({ type: "Add", payload: input.current.value })
  }

  return (
    <div>
      <h1>Reducer1</h1>
      <input type="text" ref={input} placeholder='Enter text' />
      <button onClick={handletask}>Enter</button>

      <usertask.Provider value={state.list}>
        <ListShowwithReducer dispatch={dispatch}></ListShowwithReducer>
      </usertask.Provider>

    </div>
  )
}
