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
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  techStack:`HTML,CSS,React JS`,
  image:project4
    }
    ,
    { name: "Food App",
    about:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  techStack:`HTML,CSS,React JS`,
  image:project2
},
    {
        name: "Property renting App",
      about:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack:`HTML,CSS,Angular`,
    image:project3
    },
    {
        name: "Intranet Portal",
        about:
          "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack:`HTML,CSS,React JS,Jira,Git`,
      image:project1
      }
      ,
    {
        name: "Seat Booking App",
      about:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack:`HTML,CSS,React JS,Jira,Git`,
    image:project5
    },
    {
        name: "Suits",
      about:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    techStack:`HTML,CSS,React JS,Jira,Git`,
    image:project6
    },
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
        <p className="project-note pt-4 ms-5 ps-5">Things I've built so far</p>
      </div>
      <div className="cards-div mt-2">
      {projectRows.map((projectGroup, rowIndex) => (
  <div key={rowIndex} className="row mb-3 " style={{backgroundColor:'#FFFFFF'}}>
    {projectGroup.map((data) => (
      <div key={data.id} className="col-md-4">
        <div className="card project-card " style={{ width: "18rem" }}>
          <img src={data.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
              {data.about}
            </p>
            <p>
              Tech stack: {data.techStack}
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
