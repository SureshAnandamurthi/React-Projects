import react, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Search from "./Search";
export default class App extends Component{
    state = {searchField: "abc"};
    displaySearch = (event)=>{
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.name);
    };
    render(){
        return (
            <div>
                <Router>
                    <Navbar displaySearch={this.displaySearch}/>
                    <Routes>    
                        <Route path="/home" element={<Home/>}></Route>
                        <Route path="/aboutus" element={<AboutUs/>}/>
                        <Route path="/contactus" element={<ContactUs/>}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}
