import react, { Component } from "react";

export default class Btn_One extends Component{
    state = {
        but1: "Suresh",
        but2: "Karthik",
        but3: "Kumar"
}
clickHandler = (val)=>{
    this.setState({but1 : val});
};
    render(){
        return (
        <>
            <button className="mx-5" onClick={this.clickHandler = this.clickHandler.bind(this,"Good Morning")}>{this.state.but1}</button>
            <button onClick={this.clickHandler = this.clickHandler.bind(this,"Good Afternoon")}>{this.state.but2}</button>
            <button>Change Name</button>    
        </>
        )
    }
}