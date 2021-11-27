import react, { Component } from "react";

export default class Navbar extends Component{
    state = {
        name:"",
        counter:0
    }

    incrHandler = () =>{
        console.log("incrementing");
        this.setState({counter : this.state.counter+=1})
    }
    inpChangeHandler = (val) =>{
        let res = val.target.value;
        console.log(res);
        this.setState({name: res});
    }
    decrHandler = () => {
        this.setState({counter: this.state.counter = 0})
    }
    render(){
        return (
            <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">{(this.state.name ==="")?"Suresh Anandamurthi":this.state.name}</span>
                </div>
            </nav>
                <div className="p-3">
                    <label className="px-2">Name: </label>
                    <input type="text" placeholder="enter your name here" onChange={this.inpChangeHandler}></input>
                </div>
                <div className="d-grid gap-2 d-md-block p-3">
                    <button type="button" className="btn btn-primary">{this.state.counter}</button> <br/> <br/>
                    <button type="button" className="btn btn-success" onClick={this.incrHandler}>Counter</button> <br/> <br/>
                    <button type="button" className="btn btn-danger" onClick={this.decrHandler}>Reset</button> <br/> <br/>

                </div>
            </div>
        )
    }
}