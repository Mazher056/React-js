import React, { useReducer } from 'react'

export default function UseReducer() {
    const reducer = (state,action) => {
        if(action.type =="Increm"){
            return {count:state.count+1,para:state.para+1,value1:state.value1}
        }
        if(action.type =="Decrem"){
            return {count:state.count-1,para:state.para+1,value1:state.value1}
        }
    }
    const [state, dispatch] = useReducer(reducer, { value1:12,para:0,count: 0 })

    function increment() {
        dispatch({ type: "Increm" })
    }
    function decrement() {
        dispatch({ type: "Decrem" })
     }
    return (
        <div>
            <h1>Reducer</h1>
            <h2>{state.count}</h2>
            <h2>Para {state.para}</h2>
            <h2>Value {state.value1}</h2>
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
