import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count:1,
        imageUrl: "https://picsum.photos/200",
        tags : ["tag1", "tag2", "tag3"]
    };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        // console.log("Increment Clicked", this);
        return this.state.count = this.setState({count: this.state.count+1});
    };

    render() { 
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <br></br>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
                <ul>
                    {this.state.tags.length === 0 && "Please create a new tag!"}
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0? "Zero" : count;
    }
}
 
export default Counter;
