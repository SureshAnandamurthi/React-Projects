import React, { Component } from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default class App extends Component{
    render(){
        return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"><Navbar /></div>
                <div className="col-md-8"><Sidebar /></div>
            </div>
        </div>
        </>)
    }
}