import React, { useContext } from 'react'
import Welcome from './Welcome'
import Todoitems from './Todoitems'
import { todoitem } from '../Store/Todoitem'

export default function Displaytodo({ deletebutton }) {
  const allelementofprovider = useContext(todoitem)
 const task = allelementofprovider.task;
const deletetodo = allelementofprovider.deletetodo; 
  return (

    <div>
      {task.length === 0 ? <Welcome /> :
        task.map((e, index) =>
          <Todoitems deletebutton={deletetodo} task={e} key={index} />
        )

      }

    </div>
  )
}
