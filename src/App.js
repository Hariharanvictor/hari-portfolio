import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import About from './About/About'
import TechStack from './TechStack/TechStack'
import Project from './Projects/Project';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  
  return (
    // <div>
    //   <Header></Header>
      
    //   <div id="home">
    //     <Main />
    //   </div>
    //   <div id="about">
    //     <About></About>
    //   </div>
    //   <div id="techStack">
    //     <TechStack />
    //   </div>
    //   <div id="projects">
    //     <Project />
    //   </div>
    //   {/* <div id="contact">
    //     <Contact />
    //   </div> */}
      
    // </div>
    <Router>
      <div>
        {/* Navigation links or Navbar goes here */}
        
        {/* Route configuration */}
        <Header></Header>
        <Routes>    
          <Route path="/hari-portfolio" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/techstack" element={<TechStack/>} />
          <Route path="/project" element={<Project/>} />
          {/* Add more routes as needed */}
          </Routes>
      </div>
    </Router>
  )
}

export default App
