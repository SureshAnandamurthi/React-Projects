import react, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : robots,
            searchfield: ""
        }
    
    }

    inputChangeHandler = (event) => {
        const res = event.target.value;
        this.setState({searchfield : res})
        // console.log(filteredRobots);
    }
    
    render(){
        const filteredRobots = this.state.robots.filter((robots)=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
        return(
            <div className="tc">
                <h1>Robot Friends</h1>
                <SearchBox func={this.inputChangeHandler} vari={this.state.searchfield}/>
                <CardList robots={filteredRobots} />
            </div>
            
        )
    }

}

