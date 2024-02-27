import React, { useState } from 'react'

export default function Food(){
    const handleClick=()=>{
        alert("Clicked")
    }
    const handleOnchange=(e)=>{
        setpresent(e.target.value)
    }
    const food1= "Orange";
    const food2= "Banana";
    const [present , setpresent]= useState("Good");
return(
    <>
        <ul>
            {/* <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
            <button onClick={()=>{
               {present==="Good"?setpresent("Bad"):setpresent("Good")} ;
            }}>{present}</button>
            <button>Decre</button> */}

            <input onChange={(e)=>{
                handleOnchange(e);
            }} type="text" />
            <div>Text:{present}</div>
        </ul>
    </>
)
}



