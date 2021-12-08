import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";


function App() {
  return (
    <>
      <Router>
        <Navbar />
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
