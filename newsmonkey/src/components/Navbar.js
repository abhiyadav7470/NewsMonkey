import { useState } from "react";

function Navbar(props){

    const [term, setterm]=useState(' ');

    const termdata=(event)=>{
        setterm(event.target.value);
    }

    const sendterm=()=>{
        props.getterm(term);
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewMonkey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                        </li>
                    </ul>
                    </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={term} onChange={termdata} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={sendterm} type="submit">Search</button>
      </form>
                </div>
            </nav>


        </>
    )
}

export default Navbar;