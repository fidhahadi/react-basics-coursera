import "./App.css";
import Contact from "./Contact";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import Card from "./Card";
import Btn from "./Btn";
import Usestatecomp from "./Usestatecomp";

function App() {
    // const date = new Date();

return (
    <div className="App">
        <nav>
      <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact Little Lemon</Link>
	  </nav>
      <Routes> 
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
        <h1>Task: Add three Card elements</h1>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3" />
        <Card h2="Third card's h2" h3="Third card's h3" />
        <Btn />
        <Usestatecomp />
    </div>
  );
};

export default App;