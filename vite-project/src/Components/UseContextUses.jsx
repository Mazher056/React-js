//USECONTEXT HOOK ALLOWS YOU TO SHARE VALUES BETWEEN 
// MULTIPLE LEVELS OF COMPONENTS WITHOUT PASSIONG PROPS 
// THROUGH EACH LEVEL

// TO USE THIS WE HAVE TO SETUP A PROVIVER COMPONENT
// 1. import (createContect from 'react')
// 2. export const mycontext = createContect();
// 3. <Mycontext.provider value ={value}>
//      <child/>
//    <Mycontext.Provider>

import React, { createContext, useReducer, useState } from "react"
import UseContextUses1 from "./UseContextUses1";


export const UserContext = createContext();

export default function UseContextUses() {
    const [username, setusername] = useState("Mafzhar");


    const reducer = (state, action) => {
        if (action.type === "change") {
            return { state:action.tpye  }
        }
    }


    const [state, dispatch] = useReducer(reducer, username);
    return (
        <>

            <div className="box">
                <UserContext.Provider value={username}>
                    <UseContextUses1 value={dispatch}></UseContextUses1>
                </UserContext.Provider>
            </div>
        </>
    );
}