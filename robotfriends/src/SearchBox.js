import React, { Component } from 'react';
export default class SearchBox extends Component{


    render(props){
        return(
            <div className="pa2">
                <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={this.props.func}></input>
            </div>
        )
    }
}