import {useSelector} from 'react-redux'


export default function DisplayCounter() {
  const counter=  useSelector((store)=>store.counter)
  const privercy = useSelector(store=>store.privercy)
    return (
        <>
            <p className="lead mb-4">{(privercy)?"***":counter}</p>
        </>
    )
}