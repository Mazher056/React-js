import React, { useEffect, useRef, useState } from 'react'

//  USEREF DOES NOT CAUSE RE-RENDERS WHEN ITS VALUE CHANGES.
export default function UserefUses() {
    const item = useRef(null)
    const [item1, setItem1] = useState("Niull")

    function display() {
        //USEREF DOESNOT CAUSE RE RENDER WHEN  ITS VALUE IS CHANGED
        console.log(item.current.value)


        //USESTATE CAUSE RE RENDER OF COMPONENTS ALL TIME WHEN ITS VALUE IS CHANGED
    //    item1==="Niull"?setItem1("good"):setItem1("Niull")
    }
    useEffect(() => {
        console.log("UseEffect")
    },)

    return (
        <div>
            <h1>UseRef</h1>
            <input type="text " ref={item} placeholder='Enter value' />
            <button onClick={(() => {
                display()
            })}>Click</button>
        </div>
    )
}
