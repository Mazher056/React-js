import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter';
import { privercyActions } from '../store/privacy';



export default function ControlDisplay() {
    const [privecy, setprivecy] = useState("Hide");
    const {privercy} = useSelector((store) => store.privercy)


    const value = useRef();
    const dispatch = useDispatch();
    const handleincrement = () => {
        dispatch(counterActions.increment());
    }
    const handledecrement = () => {
        dispatch(counterActions.decrement());
    }
    const handleAdd = () => {
        dispatch(counterActions.add(value.current.value))
        value.current.value = "";

    }
    const handleSub = () => {
        dispatch(counterActions.sub(value.current.value))
        value.current.value = ""
    }
    const Toggleprivecy = () => {
        {privecy==="Show"?setprivecy("Hide"):setprivecy("Show")}
        dispatch(privercyActions.toggle())
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