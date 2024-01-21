import React from 'react'
import './Header.css'
import linkeinIcon from '../../src/assest/entypo-social_linkedin-with-circle.png'
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
  const download=()=>{
    const url="https://Hariharanvictor.github.io/hari-portfolio/Hariharan_cv.pdf";
    const fileName=url.split("/").pop();
    const aTag=document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    console.log('downlaod')
  }
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
          
          <Navbar.Brand has={Link} to="hari-portfolio" ><span style={{fontSize:'23px'}} className='gradient-text'>{brand}</span><br></br><span style={{fontSize:'23px'}} className='gradient-text'>Hari</span></Navbar.Brand>
          
          <div>
          <Nav className="me-auto d-flex d-flex ms-5" >
          {/* <Nav.Link href="#home" className='header-nav'>Home</Nav.Link> */}
          <Link to="hari-portfolio" className='nav-link'>Home</Link>
          <Link to="about" className='nav-link'>About</Link>
          <Link to="techstack" className='nav-link'>TechStack</Link>
          <Link to="project" className='nav-link'>Projects</Link>
          <Link to="contact" className='nav-link'>Contact</Link>
          {/* <Link to="about">About</Link> */}
          </Nav>
          </div>
          
          <div>
          <a href="https://www.linkedin.com/in/hariharan-s-04038b1ba/" target='_blank' className='me-2'>
            <img src={linkeinIcon} usemap="#image-map"  className='img-fluid '/>
            </a>

            
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2XT0rDQBTGfyLSQ9StHqDniOARuiueoMu4cu8BXLgSCd25cV1Kr9CNN1DQ9M9GcCTwhDKQ6GQm6TycDz4IJEy+H+/NywSSkpL+olOgAErAdOwSmAFnIcO/9RDcWK7eOQwBUBwgvBE/hgDoo21Mjd9DANiLZh3bWE4AJlUAPS00BhbATrwEJloAxjUTay33ogdYNIzDuQaAXQPAVjvARgPAUnsLTWTD2s+XWjZxJkHn0vNbuXYJnx0aIIRNAvD4kN0DK+n7avK8yJn+KuYKXEjIz4Yp9AU8A5cxAhQNwW0/xQiwdgDYxAhgHJ0AYvsOjICBc6qIAAZdhu8DoHMlANwqYLSdhWwlAFv/vgIjx1FpYtsDrnPexAbg+z5vqQf4aHHi3PdNzbpTjzVzF4CZJ0DlW+AoEETuWoFz4DUAxB1w7AmR01JD+e/1bacH4KQlRE7kmmoO3wShJjyifQh14X90Lf5V34KtBaCycFT+AAAAAElFTkSuQmCC" className='img-fluid' style={{height:'33px',width:'33px',cursor:'pointer'}} onClick={download} />

 {/* <map name="image-map">
    <area target="_blank" alt="Github" title="Github" href="https://github.com/" coords="19,17,17" shape="circle"/>
    <area target="_blank" alt="tvitter" title="tvitter" href="https://about.twitter.com/en" coords="72,19,15" shape="circle"/>
     <area target="_blank" alt="Linked In" title="Linked In" href="https://www.linkedin.com/in/hariharan-s-04038b1ba/" coords="119,18,15" shape="circle"/>
 </map> */}
    </div>
    
    
        </Container>

      </Navbar>
    </>
  )
}

export default Header