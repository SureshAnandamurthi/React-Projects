import React, { Component } from 'react'

export default class Navbar extends Component{
    render(props){
        return(
            <div className="tc">
                <nav className="navbar navbar-dark bg-dark mb-2">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">{(this.props.text === "")?"Suresh Anandamurthi":this.props.text}</span>
                    </div>
                </nav>
            </div>
        )
    }
}