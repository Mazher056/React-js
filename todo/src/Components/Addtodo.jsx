import React, { useContext, useRef } from 'react'
import { todoitem } from '../Store/Todoitem'


export default function Addtodo() {
  const name = useRef(null)
  const date = useRef(null)

  const allelementofprovider = useContext(todoitem);
  const addtodo = allelementofprovider.addtodo;
  const handleadd = () => {
    addtodo(name.current.value, date.current.value)
  }
  return (
    <div className='container'>
      <input type="text" ref={name} />
      <input type="date" ref={date} />
      <button onClick={handleadd} className='btn btn-outline-success'>Add</button>
    </div>
  )
}
