import React, { useContext } from 'react'
import { usercontext } from './CreateContext.jsx'


export default function CreateContext1() {
    let user = useContext(usercontext)


    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}
