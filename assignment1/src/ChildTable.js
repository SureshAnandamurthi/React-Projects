import React, { Component } from "react";
class ChildTable extends Component{
    state = this.props;
    render(props){
        // let state = {props}
        return (
            <div>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}


export default ChildTable;