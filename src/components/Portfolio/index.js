import React from 'react';
import photo from "../../assets/small/commercial/0.jpg";
import photo1 from "../../assets/small/commercial/1.jpg";
import photo2 from "../../assets/small/commercial/2.jpg";
import photo3 from "../../assets/small/commercial/3.jpg";
import photo4 from "../../assets/small/commercial/4.jpg";

 

function Portfolio() {
  //list the projects
  const projects = [
  {name: "Project1", githublink: "www", deployedLink: "www", pic: photo,},
  { name: "Project2",githublink: "www", deployedLink: "www", pic: photo1,},
  { name: "Project3", githublink: "www", deployedLink: "www", pic: photo2,},
  { name: "Project4", githublink: "www", deployedLink: "www", pic: photo3,},
   { name: "Project5", githublink: "www", deployedLink: "www", pic: photo4,},

 ];

  return (
   <section>
    <ul className="flex-row">
      {projects.map((project) => (
        <li 
          className="mx-1"
          key={project.name}>
            <span>{project.name}</span> <br/>
            <span>{project.githublink}</span> <br/>
            <span>{project.deployedLink}</span>
  <div>
          <img
            className="img-thumbnail mx-1"
            src={project.pic}
          />
      </div>

             
        </li>
      ))}
    
      <li>

      </li>

    </ul>
    
       
     
   </section>
  );
}

export default Portfolio;