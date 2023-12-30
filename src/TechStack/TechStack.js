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
            <h2 className='tech-heading ms-5 ps-5'>My Tech Stack</h2>
            <p className='tech-words pt-4 ms-5 ps-5'>Technologies I've been currently working with recently</p>
        </div>
        <div className='d-flex flex-column mt-5'>
            <div className='d-flex flex-row justify-content-evenly'>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={bootstrap} alt="" />
            
            </div>
            <div className='d-flex flex-row mt-5 justify-content-evenly'>
            <img src={angular} alt="" style={{height: '121px',width: '107px'}}  />
            <img src={python} alt="" style={{height: '121px',width: '107px'}} />
            <img src={jira} alt="" style={{height: '121px',width: '107px'}} />
            <img src={vscode} alt="" />
            <img src={gitHub} alt="" />
            </div>
            
            
        </div>
    </div>
  )
}

export default TechStack