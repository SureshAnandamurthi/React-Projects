import react, { Component } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";

class App extends Component{

  render(){
    return (
      <>
        <Router>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/contacts" element={<Contacts />}/>
          </Routes>
        </Router>
        
      </>
    )
  }
}

export default App;