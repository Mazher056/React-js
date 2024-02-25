import {useSelector} from 'react-redux'


export default function DisplayCounter() {
  const {counterVal}=  useSelector((store)=>store.counter)
//   const counter=counterObj.counterVal
  const privercy = useSelector(store=>store.privercy)
    return (
        <>
            <p className="lead mb-4">{(privercy)?"***":counterVal}</p>
        </>
    )
}