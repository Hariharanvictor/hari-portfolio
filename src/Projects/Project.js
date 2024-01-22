import React from "react";
import "./Project.css";
import project1 from "../assest/Icons/Rectangle 4.png";
import project2 from '../assest/Icons/Rectangle 6.png';
import project3 from '../assest/Icons/Rectangle 8.png';
import project4 from '../assest/Icons/Rectangle 12.png';
import project5 from '../assest/Icons/Rectangle 13.png';
import project6 from '../assest/Icons/Rectangle 14.png';
import Header from "../Header/Header";
const Project = () => {
  const projects = [
    
    { 
        name: "Portfolio",
    about:
      "My most recent project stands as a comprehensive showcase of my front-end development skills and abilities. This project was developed based on a portfolio template from Figma, demonstrating my ability to transform design concepts into functional, interactive websites.",
  techStack:`HTML,CSS,React JS, Bootstrap `,
  image:project4
    }
    ,
   
    
    {
        name: "Intranet Portal",
        about:
          "This project was specifically designed to focus on easy access to the most useful applications within an organization, showcasing my skill in creating intuitive, user-friendly interfaces. Additionally, it features a real-time event update system, ensuring users stay informed about important office happening.",
      techStack:`HTML,CSS,React JS,Jira,Git`,
      image:project1
      }
      ,
    {
        name: "Suits",
      about:
        "This project is a comprehensive Hospital Management Web Application designed to streamline hospital operations. Developed as a robust platform, it integrates various functionalities essential for the efficient management of hospital resources and services.",
    techStack:`HTML,CSS,React JS,Jira,Git`,
    image:project6
    },
    {
      name: "Property renting App",
    about:
      "This project is a dedicated Angular learning endeavor, designed to comprehensively cover the essential topics of Angular. It serves as a practical exploration of the framework, demonstrating my ability to grasp and apply Angular's core concepts in web development.",
  techStack:`HTML,CSS,Angular`,
  image:project3
  }
  ];

  const groupProjects = (projects, itemsPerRow) => {
    return projects.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index / itemsPerRow)
  
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }
  
      resultArray[chunkIndex].push(item)
  
      return resultArray
    }, [])
  }
  
  const projectRows = groupProjects(projects, 3);
  
  return (
    <div  className="project-div">
        
      <div>
        <h2 className="project-head ms-5 ps-5">Projects</h2>
        <p className="project-note pt-2 ms-5 ps-5">Things I've built so far</p>
      </div>
      <div className="cards-div mt-5">
      {projectRows.map((projectGroup, rowIndex) => (
  <div key={rowIndex} className="row mb-5" style={{backgroundColor:'#FFFFFF'}}>
    {projectGroup.map((data) => (
      <div key={data.id} className="col-md-4">
        <div className="card project-card " style={{ width: "18rem" }}>
          <img src={data.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text" style={{  height: '200px',
    overflow: 'auto'}}>
              {data.about}
            </p>
            <p>
              <span style={{color:'#42446E'}}>Tech stack: </span> {data.techStack}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
))}
</div>

     
    </div>
  );
};

export default Project;
