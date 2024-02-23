import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";


function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <hr style={{color:'gray'}}/>
      <About/>
      <hr style={{color:'gray'}}/>
      <Skills/>
      <hr style={{color:'gray'}}/>
      <Portfolio/>
      <hr style={{color:'gray'}}/>
      <Contact/>
    </>
  );
}

export default App;
