import React, { useEffect, useRef, useState } from 'react'

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setelapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
           intervalRef.current= setInterval(() => {
                setelapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }


        return ()=>{
                clearInterval(intervalRef.current);
        }
    }, [isRunning])

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
    }

    const stop = () => {
        setIsRunning(false);
    }

    const reset = () => {
        setIsRunning(false);
        setelapsedTime(0);

    }

    function formatTime(){
        let hours = Math.floor(elapsedTime/(1000*60*60))
        let min = Math.floor(elapsedTime/(1000*60)%60)
        let sec = Math.floor(elapsedTime/(1000)%60)
        let milisec = Math.floor(elapsedTime%(1000)/10)

        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2,"0");
        milisec = String(milisec).padStart(2,"0");
        return `${min}:${sec}:${milisec}`;
    }
    return (
        <div>
            <div>{formatTime()}</div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
