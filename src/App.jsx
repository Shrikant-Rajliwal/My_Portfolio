import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App =()=>{
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
      </BrowserRouter>
  )

    
};

export default App;