import React, { createContext, useState } from 'react'
import CreateContext1 from './CreateContext1';




export const usercontext = createContext();

export default function CreateContext() {
    const [name, setname] = useState("Mazhar");
    return (
        <div>
           <h1>  {name}</h1>
            <usercontext.Provider value={name}>
                <CreateContext1></CreateContext1>
            </usercontext.Provider>
        </div>
    )
}
