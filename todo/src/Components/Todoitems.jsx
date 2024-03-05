import React from 'react'
import "../App.css"

export default function Todoitems({task,deletebutton}) {

    return (
        <>
            <div className="container">
                <h4 className='todoname'>{task.name}</h4>
                <p className='todoname'>{task.date}</p>
                <div className="divider">
                <button  className='btn btn-success readbutton'>Mark Read</button>
                <button 
                onClick={(()=>{
                    deletebutton(task.name)
                })}
                className='btn btn-danger deletebutton'>Delete</button>
                </div>
            </div>
            
            </>
    )
}
