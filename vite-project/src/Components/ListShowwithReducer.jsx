import React, { useContext } from 'react'
import { usertask } from './UseReducer1';


export default function ListShowwithReducer({dispatch}) {
    const list = useContext(usertask);
    return (
        <div>
            <h1>task</h1>
            <ul style={{listStyle:"none",fontSize:"23px",padding:"5px"}}>
                {list.map((e, index) =>
                    <li key={index}
                    
                    style={e.isCompleted?{color:"gray"}:{color:"black"}}>
                    {e.value} 
                    <button 
                     onClick={(()=>{dispatch({type:"Toggle",payload:index})})}
                    >Complete</button> 
                    <button
                     onClick={(()=>{dispatch({type:"Delete",payload:index})})}
                    >Delete</button> 
                    </li>
            
                )}
            </ul>
        </div>
    )
}
