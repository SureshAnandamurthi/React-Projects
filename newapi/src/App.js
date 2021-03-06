import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </Router>
  );
}

export default App;
