import React, { useEffect, useState } from 'react'
import '../App.css'

export default function DigitalClock() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []);

  function formattime() {
    let hour = time.getHours();
    let min = time.getMinutes();
    let seconds = time.getSeconds();
    const merdiem = hour >= 12 ? "PM" : "AM";

    return `${padzero(hour)}:${padzero(min)}:${padzero(seconds)}:${merdiem}`

  }
  function padzero(number){
   return number<10?`0${number}`:number
}



  return (
    <>
      <div className='clock'>

        <h1>{formattime()}</h1>

      </div>
    </>
  )
}
