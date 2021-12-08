import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() { 
        return <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="...">Suresh Anandamurthi</Link>
            </div>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="login">Login</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        </>;
    }
}
 
export default Navbar;