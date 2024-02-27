export default function Displaytask({task,handledeleteitem}){
    const headledelete=(index)=>{
        handledeleteitem(index);
    }
    return(
        <>
        <ul>
            {task.map((e,index)=>
                <li  key={index}> {e} <button onClick={(key)=>{
                    headledelete(index)
                }}>Delete</button> </li>
               
                )}
        </ul>
        </>
    )

}