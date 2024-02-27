import React, { useEffect, useRef, useState } from 'react'

export default function Mystopwatch() {
    const [running, setrunning] = useState(false)
    const [displaytime, setdisplaytime] = useState(false)
    const capturedtime = useRef(0);
    const intervalclear = useRef(null);

    useEffect(() => {
        if (running) {
           intervalclear.current= setInterval(() => {
                setdisplaytime(Date.now() - capturedtime.current);
            }, 10);
        }

        return ()=>{clearInterval(intervalclear.current)
    }
    }, [running])

    function start() {
        setrunning(true);
        capturedtime.current = Date.now();
    }
    function stop() {
setrunning(false)
    }
    function reset() {
        setrunning(false)
        setdisplaytime(0)
    }
    function display() {
        let minute = Math.floor(displaytime / (1000 * 60) % 60)
        let second = Math.floor(displaytime / (1000) % 60)
        let milisecond = Math.floor(displaytime % (1000) / 10)
        minute = String(minute).padStart(2,"0")
        second = String(second).padStart(2,"0")
        milisecond= String(milisecond).padStart(2,"0")
        return `${minute}:${second}:${milisecond}`
    }
    return (
        <div>
            <p>{display()}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
