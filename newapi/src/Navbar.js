import React, { Component } from "react";
import {Link} from "react-router-dom";
class Navbar extends Component{

    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">NewsAPI</Link>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/news">News</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;