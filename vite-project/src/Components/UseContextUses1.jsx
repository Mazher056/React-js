import { useContext, useState } from "react"
import { UserContext } from "./UseContextUses.jsx"

export default function UseContextUses1() {
    const username = useContext(UserContext)
    return (
        <>
            <h1>{username}</h1>
        </>
    )
}