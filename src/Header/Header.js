import React from 'react'
import './Header.css'
import headericons from '../../src/assest/headericons.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const brand='{007}';
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'techStack', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        return element && window.scrollY >= element.offsetTop - element.clientHeight / 3;
      });

      if (currentSection && activeLink !== currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);
  return (
//     <div>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid d-flex justify-content-between ">
//     <div>

//     <a className="navbar-brand gradient-text" href="#" ><span style={{fontSize:'20px'}}>{brand}</span><br></br><span style={{fontSize:'18px'}}>hari</span></a>
//     </div>
//     <div>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
    
//     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Tech Stack</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Projects</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contacts</a>
//         </li>
        
               
//       </ul>
//     </div>
//     </div>
//     <div>
//     <img src={headericons} usemap="#image-map"/>

// <map name="image-map">
//     <area target="_blank" alt="Github" title="Github" href="https://github.com/" coords="19,17,17" shape="circle"/>
//     <area target="_blank" alt="tvitter" title="tvitter" href="https://about.twitter.com/en" coords="72,19,15" shape="circle"/>
//     <area target="_blank" alt="Linked In" title="Linked In" href="https://www.linkedin.com/in/hariharan-s-04038b1ba/" coords="119,18,15" shape="circle"/>
// </map>
//     </div>
//   </div>
// </nav>
//     </div>
<>
      <Navbar className='navbar mb-5'  >
        <Container  fluid className='d-flex  justify-content-between'>
          
          <Navbar.Brand href="#home" ><span style={{fontSize:'23px'}} className='gradient-text'>{brand}</span><br></br><span style={{fontSize:'23px'}} className='gradient-text'>Hari</span></Navbar.Brand>
          
          <div>
          <Nav className="me-auto">
          {/* <Nav.Link href="#home" className='header-nav'>Home</Nav.Link> */}
          <Link to="hari-portfolio">Home</Link>
          <Link to="about">About</Link>
          <Link to="techstack">TechStack</Link>
          <Link to="project">Projects</Link>
          {/* <Link to="about">About</Link> */}
          </Nav>
          </div>
          
          <div>
  <img src={headericons} usemap="#image-map"  className='img-fluid'/>

 <map name="image-map">
    <area target="_blank" alt="Github" title="Github" href="https://github.com/" coords="19,17,17" shape="circle"/>
    <area target="_blank" alt="tvitter" title="tvitter" href="https://about.twitter.com/en" coords="72,19,15" shape="circle"/>
     <area target="_blank" alt="Linked In" title="Linked In" href="https://www.linkedin.com/in/hariharan-s-04038b1ba/" coords="119,18,15" shape="circle"/>
 </map>
    </div>
    
    
        </Container>
      </Navbar>
    </>
  )
}

export default Header