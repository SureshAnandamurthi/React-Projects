import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() { 
        return <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="form">Form</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>;
    }
}
 
export default Nav;