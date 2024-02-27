import { useEffect, useState } from "react"

export default function UseEffect() {
    const [count, setcount] = useState(0);
    const [textcolor, settextcolor] = useState("green")

    // useEffect(()=>{
    //   //here the value will will updated
    // },[here the value to be inserted which will get updated only when this value will get any updates. If this will not here then all the value inside the useffect will get updated])


    useEffect(() => {
        document.title = `Count ${count} ${textcolor}`
    }, [count, textcolor])

    const changecolor = () => {
        { textcolor === "green" ? settextcolor("aqua") : settextcolor("green") }
    }
    const handleIncrement = () => {
        setcount(count => count + 1)
    }
    const handledecrement = () => {
        setcount(count => count - 1)
    }



    // ONE MORE EXAMPLE OF USEEFFECT

    const [width, setwidth] = useState(window.innerWidth);
    const [heigh, setheight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleresize);
        // console.log("Event listner added")

        // window.removeEventListener("resize",handleresize);
        // console.log("EEvent listener removed")

        document.title = `size ${width}`
    },[])


    const handleresize = () => {
        setwidth(window.innerHeight)
        setheight(window.innerWidth)
    }

    return (
        <>
            {/* use state to update count */}
            <h1 style={{ color: textcolor }}>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handledecrement}>Decrement</button><br />
            <button onClick={changecolor}>Change Color</button>
            <br />
            <br />
            <br />
            <br />
            <h1 >Height is {heigh}</h1>
            <h1>width is {width}</h1>
        </>
    )
}