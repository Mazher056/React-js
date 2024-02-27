//USECONTEXT HOOK ALLOWS YOU TO SHARE VALUES BETWEEN 
// MULTIPLE LEVELS OF COMPONENTS WITHOUT PASSIONG PROPS 
// THROUGH EACH LEVEL

// TO USE THIS WE HAVE TO SETUP A PROVIVER COMPONENT
// 1. import (createContect from 'react')
// 2. export const mycontext = createContect();
// 3. <Mycontext.provider value ={value}>
//      <child/>
//    <Mycontext.Provider>

import React ,{ createContext, useState } from "react"
import UseContextUses1 from "./UseContextUses1";


export const UserContext = createContext();

export default function UseContextUses() {
    const [username, setusername] = useState("Mazher");
    return (
        <>
        <h1>From Good</h1>
            <div className="box">
                <UserContext.Provider value={username}>
                   <UseContextUses1 username={username}></UseContextUses1>
                </UserContext.Provider>
            </div>
        </>
    );
}