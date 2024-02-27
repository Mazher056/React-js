import { useState } from "react"
export default function ColorSelector() {
    const [color, setColor] = useState("#7ceffe");
    const handlecolor=(e)=>{
        setColor(e.target.value)
    }
    return (
        <>
            <div className="colorpicker">
                <h1>Color Picker</h1>
                <div className="colordisplay" style={{ backgroundColor: color }}>
                    <p>Selected Color :  {color}</p>
                </div>
                <label htmlFor="">Select a Color</label>
                <input type="color" onChange={(e)=>{
                    handlecolor(e)
                }} value={color} />
            </div>
        </>
    )
}