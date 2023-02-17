function Articlecart(props){
    console.log(props.product);
    return(
        <>
        <div className="card text-center cart mx-3 my-3">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
        </>
    )
}

export default Articlecart;