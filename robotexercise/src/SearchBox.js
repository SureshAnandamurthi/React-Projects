import React, { Component } from 'react'

export default class SearchBox extends Component{
    render(props){
        return (
            <input type="search" onChange={this.props.searchVal}/>
        )
    }
}