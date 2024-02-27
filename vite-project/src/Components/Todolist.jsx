import { useState } from "react"

export default function Todolist(props){
    
    const handleonclick=()=>{
        const value = document.getElementById("task").value
       props.handleinputchange(value);
    }

    return(<>
    <h1>Todo List</h1>
    <input type="text" id="task" placeholder="Enter task here" />
    <button onClick={handleonclick}>Enter</button>
    </>)
}