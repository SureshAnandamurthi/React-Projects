import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Contacts from "./Contacts";


class App extends Component {
    render() { 
        return (<div>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/contacts" element={<Contacts />}/>
                </Routes>
            </Router>
        </div>);
    }
}
 
export default App;