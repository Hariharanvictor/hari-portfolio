import React from 'react';
import './techStack.css'
import html from '../assest/Icons/vscode-icons_file-type-html.jpg';
import css from '../assest/Icons/vscode-icons_file-type-css.jpg';
import js from '../assest/Icons/vscode-icons_file-type-js-official.jpg';
import react from '../assest/Icons/logos_react.jpg';
import bootstrap from '../assest/Icons/logos_bootstrap.jpg';
import vscode from '../assest/Icons/vscode-icons_file-type-vscode.jpg';
import gitHub from '../assest/Icons/Vector.jpg';
import angular from '../assest/Icons/4373284_angular_logo_logos_icon.png';
import python from '../assest/Icons/4518857_python_icon.png';
import jira from '../assest/Icons/4373216_jira_logo_logos_icon.png'
import Header from '../Header/Header';

const TechStack = () => {
  return (
    <div  className='tech-div'>
        
        <div>
            <h2 className='tech-heading ms-5 ps-5 '>My Tech Stack</h2>
            <p className='tech-words pt-4 ms-5 ps-5'>Technologies I've been currently working with recently</p>
        </div>
       
        <div className='d-flex flex-column '>
        <div className='d-flex flex-row mt-5  mb-3  justify-content-evenly'>
        <div className="icon-container">
        <img src={html} alt="HTML" className="icon" />
        <span className="icon-label">HTML-5</span>
      </div>

      <div className="icon-container">
        <img src={css} alt="CSS" className="icon" />
        <span className="icon-label">CSS-3</span>
      </div>

      <div className="icon-container">
        <img src={js} alt="JS" className="icon" />
        <span className="icon-label">Java Script</span>
      </div>

      <div className="icon-container"> 
        <img src={react} alt="React" className="icon" />
        <span className="icon-label">React Js</span>
      </div>

      <div className="icon-container">
        <img src={bootstrap} alt="Bootstrap" className="icon" />
        <span className="icon-label">Bootstrap</span>
      </div>
      </div>

      
            <div className='d-flex flex-row mt-5 justify-content-evenly'>
      <div className="icon-container">
        <img src={angular} alt="Angular" className="icon" />
        <span className="icon-label">Angular Js</span>
      </div>

      

      <div className="icon-container">
        <img src={python} alt="Python" className="icon" />
        <span className="icon-label">Python</span>
      </div>

      <div className="icon-container">
        <img src={jira} alt="Jira" className="icon" />
        <span className="icon-label">Jira</span>
      </div>

      <div className="icon-container">
        <img src={vscode} alt="VSCode" className="icon" />
        <span className="icon-label">VSCode</span>
      </div>

      <div className="icon-container">
        <img src={gitHub} alt="GitHub" className="icon" />
        <span className="icon-label">GitHub</span>
      </div>
    </div>
            
            
        </div>
    </div>
  )
}

export default TechStack