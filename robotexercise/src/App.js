import React, { Component } from "react";
import { robots } from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import BadgetComp from "./BadgetComp";
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ""  
        }
    }

    inputHandler = (event) => {
        console.log(event.target.value);
        this.setState({searchField: event.target.value})
    }


    render(){
        console.log(JSON.stringify(this.state.robots))
        let filtRobs = this.state.robots.filter((robot)=>{
            return (
                robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())

            )
        })
        return (
            <div className="tc">
                <Navbar text={this.state.searchField}/>
                <BadgetComp count={filtRobs.length}/>
                <SearchBox searchVal = {this.inputHandler}/>
                <CardList robots = {filtRobs}/>
                {/* {JSON.stringify(this.state.robots)} */}
            </div>
        )
    }
}