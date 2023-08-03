import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";
import { useState } from "react";
// import Contact from "./Contact";
// import Homepage from "./Homepage";
// import AboutLittleLemon from "./AboutLittleLemon";
// import { Routes, Route, Link } from "react-router-dom";
// import Card from "./Card";
// import Btn from "./Btn";
// import Usestatecomp from "./Usestatecomp";
const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
      <h2
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </h2>
    );
  };
  
  const Paragraph = ({ children }) => {
    const { theme } = useTheme();
    return (
      <p
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {children}
      </p>
    );
  };
  
  const Content = () => {
    return (
      <div>
        <Paragraph>
          We are a pizza loving family. And for years, I searched and searched and
          searched for the perfect pizza dough recipe. I tried dozens, or more.
          And while some were good, none of them were that recipe that would
          make me stop trying all of the others.
        </Paragraph>
      </div>
    );
  };
  
  const Header = () => {
    return (
      <header>
        <Title>Little Lemon 🍕</Title>
        <Switch />
      </header>
    );
  };
  
  const Page = () => {
    return (
      <div className="Page">
        <Title>When it comes to dough</Title>
        <Content />
      </div>
    );
  };
function App() {
    // const date = new Date();
    // <div className="App">
    //     <nav>
    //   <Link to="/" className="nav-item">Homepage</Link>
    //     <Link to="/about" className="nav-item">About Little Lemon</Link>
    //     <Link to="/contact" className="nav-item">Contact Little Lemon</Link>
	//   </nav>
    //   <Routes> 
    //     <Route path="/" element={<Homepage />}></Route>
    //     <Route path="/about" element={<AboutLittleLemon />}></Route>
    //     <Route path="/contact" element={<Contact />}></Route>
    //   </Routes>
    //     <h1>Task: Add three Card elements</h1>
    //     <Card h2="First card's h2" h3="First card's h3" />
    //     <Card h2="Second card's h2" h3="Second card's h3" />
    //     <Card h2="Third card's h2" h3="Third card's h3" />
    //     <Btn />
    //     <Usestatecomp />
    // </div>

    const [name, setName] = useState("name");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submitted successfully")
    }
    const { theme } = useTheme();
    return (
      <div
        className="App"
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
        }}
      >
        <Header />
        <Page />
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Name : </label>
                    <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <button disabled={!name} type="submit">Submit</button>
            </fieldset>
        </form>
      </div>
  );
};
function Root() {
    return (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
  }


export default Root;