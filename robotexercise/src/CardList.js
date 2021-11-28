import React, { Component } from 'react'
import Card from "./Card"

export default class CardList extends Component{
    render(props){
        return (
            <div>
                <Card robots={this.props.robots}/>
            </div>
        )
    }
}