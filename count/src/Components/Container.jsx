export default function Container({ children }) {
    return (
        <>
            <div className="card mt-5" style={{width : "18rem"}}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
}