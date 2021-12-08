import React, { Component } from 'react';
import Axios from 'axios';
import Card from "./Card";
class Contacts extends Component {
    constructor(){
        super();
        this.state = {data : []}
    }

    componentDidMount = () =>{
        Axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30ec56c98e3b446e8851415adac15149&page=${this.state.page + 1}&pageSize=20")
        .then((response)=>{
            console.log(response.data.articles)
            this.setState({data: response.data.articles})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() { 
        return (
            <div>
                <pre>Contacts Comp</pre>
                {/* <pre>{JSON.stringify(this.state.data)}</pre> */}
                <Card articles={this.state.data}/>
            </div>
        )
    }
}
 
export default Contacts;