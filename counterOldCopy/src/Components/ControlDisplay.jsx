import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'


export default function ControlDisplay() {
    const [privecy, setprivecy] = useState("Show");
    const privercy = useSelector((store)=>store.privercy)

    const value = useRef();
    const dispatch = useDispatch();
    const handleincrement = () => {
        dispatch({ type: "Increment" })
    }
    const handledecrement = () => {
        dispatch({ type: "Decrement" })
    }
    const handleAdd = () => {
        dispatch({
            type: "Add",
            payload: {
                value: value.current.value
            }
        })
        value.current.value = ""

    }
    const handleSub = () => {
        dispatch({
            type: "Sub",
            payload: {
                value: value.current.value
            }
        })
        value.current.value = ""
    }
    const Toggleprivecy = () => {
        dispatch({type:"Change"});
    if(privercy){
        setprivecy("Hide");
    }else{
        setprivecy("Show");
    }
    }


    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <input type="text" className="d-grid gap-2 d-sm-flex justify-content-sm-center" ref={value} style={{ width: "90px" }} />
                <div className="">

                    <button className="btn btn-primary" onClick={Toggleprivecy}>{privecy}</button>
                </div>
                <div className="">

                    <button className="btn btn-primary" onClick={handleincrement}>+1</button>
                    <button className="btn btn-success" onClick={handledecrement}>-1</button>
                </div>
                <div className="">

                    <button className="btn btn-primary" onClick={handleAdd}>Add</button>
                    <button className="btn btn-success" onClick={handleSub}>Sub</button>
                </div>
            </div>

        </>
    );
}