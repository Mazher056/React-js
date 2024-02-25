import { useRef, useState } from 'react';



export default function ControlDisplay() {
   


    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <input type="text" className="d-grid gap-2 d-sm-flex justify-content-sm-center"  style={{ width: "90px" }} />
                <div className="">

                    <button className="btn btn-primary" >***</button>
                </div>
                <div className="">

                    <button className="btn btn-primary" >+1</button>
                    <button className="btn btn-success" >-1</button>
                </div>
                <div className="">

                    <button className="btn btn-primary" >Add</button>
                    <button className="btn btn-success" >Sub</button>
                </div>
            </div>

        </>
    );
}