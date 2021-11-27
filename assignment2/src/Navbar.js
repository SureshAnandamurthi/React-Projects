import React, { Component } from 'react'

class Navbar extends Component{
    state = {name: "Suresh Anandamurthi"}
    nameHandler = ()=>{
        (this.state.name === "Suresh Anandamurthi")? this.setState({name: "Neeraj SA"}) : this.setState({name: "Suresh Anandamurthi"});
        // this.setState({name: "Neeraj SA"})
        document.getElementById("inpVal")
    };
    getInputHandler = (val) =>{
        let input = val.target.value
        this.setState({name: `${input}`});
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                       <a class="navbar-brand" href="#">{this.state.name}</a>
                    </div>
                </nav>
                <div className="p-3">
                    <label>Name: </label>
                    <input type="text" placeholder="Enter your Name here" id="inpVal" onChange={this.getInputHandler}></input>
                </div>
                <div className="p-3">
                    <button className="btn btn-primary" onClick={this.nameHandler}>Click Me</button>
                </div>
                
            </div>
        )
    }
}

export default Navbar;