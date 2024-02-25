import {useSelector} from 'react-redux'



export default function DisplayCounter() {
        const count = useSelector((store)=>store.counter)
    return (
        <>
            <p className="lead mb-4">{count}</p>
        </>
    );
}