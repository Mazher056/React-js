import { useContext, useState } from "react"
import { UserContext } from "./UseContextUses.jsx"

export default function UseContextUses1(props) {
    const username = useContext(UserContext)

    const handlenamechange = () => {
        dispatch({ type: "change", payload: "Clicked " })
    }

    return (
        <>
            <h1 onClick={(() => {
                handlenamechange()
            })}>{username}</h1>
        </>
    )
}