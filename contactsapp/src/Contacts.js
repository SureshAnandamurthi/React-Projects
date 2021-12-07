import React, { Component } from 'react';
import Axios from 'axios';

class Contacts extends Component {
    constructor(){
        super();
        this.state = {data : []}
    }

    componentDidMount = () =>{
        Axios.get("")
        .then()
        .catch()
    }

    render() { 
        return <div>
            <pre>Contacts Comp</pre>
        </div>;
    }
}
 
export default Contacts;