import { useState } from "react"

export default function ChangingStateofarray() {
    const [foods, setfoods] = useState(["fruit","Vegetable"]);
    const handlefoodarray = () => {
        let newfood = document.getElementById("additem").value;
        document.getElementById("additem").value="";
        setfoods([...foods,newfood]);
        
    }
    const handleremovefoodarray=(e)=>{
        // alert(e)
        let newarray = foods.filter((element,i) => e!==i);
        setfoods(newarray)
    }
    return (
        <>
            <input placeholder="Add Item" type="text"  name="" id="additem" />
            <button onClick={handlefoodarray}>Enter</button> 
            
          
            <ul>
              {foods.map((e,index)=>
                <li key={index} onClick={()=>handleremovefoodarray(index)} >{e}</li>
              )}
            </ul>
        </>
    )

}