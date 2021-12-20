import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import { useState } from 'react';



function App() {
  
  const [search, setSearch] = useState("");

  const getSearch = (event) =>{
    
    console.log(event.target.value);
    setSearch(event.target.value);
    event.preventDefault();
    console.log(search);
    console.log(event);
  }

  // const final =(event)=>{
  //   let result = event.target.value;
  //   console.log(result);
  //   event.preventDefault();
  //   console.log(event)
  //   console.log(search);
  // }
  return (
    <>
      <Router>
        <Navbar getSearch={getSearch}/>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Home />}/>
          </Route>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
