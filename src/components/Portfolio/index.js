import React from 'react';
import photo from "../../assets/small/commercial/1.png";
import photo1 from "../../assets/small/commercial/2.png";
import photo2 from "../../assets/small/commercial/3.png";
import photo3 from "../../assets/small/commercial/4.png";
import photo4 from "../../assets/small/commercial/5.png";
import photo5 from "../../assets/small/commercial/6.png";

 

function Portfolio() {
  //list the projects
  const projects = [
  {name: "Yard Sale!", githublink: <a href="https://github.com/RHunjan/yard-sale">GitHub </a>, deployedLink: <a href="https://yard-5ale.herokuapp.com/">Heroku Link </a>, pic: photo, desc: 'Yard Sale',},
  { name: "Charge it Up!",githublink: <a href="https://github.com/tarequem/ev-mapper">GitHub Link </a>, deployedLink: <a href="https://tarequem.github.io/ev-mapper/">Deployed App </a>, pic: photo1, desc: 'Charging Cars',},
  { name: "Note Taker Starter Code", githublink: <a href="https://github.com/RHunjan/note-taker-two/blob/main/README.md">GitHub Link </a>, deployedLink: <a href="https://fierce-wave-38426.herokuapp.com/notes">Deployed App </a>, pic: photo2, desc: 'Note pad',},
  { name: "Blog Post", githublink: <a href="https://github.com/RHunjan/blog-post">GitHub Link </a>, deployedLink: <a href="https://mighty-ridge-59271.herokuapp.com/">Deployed App </a>, pic: photo3, desc: 'Blog Post',},
   { name: "Random Password", githublink: <a href="https://github.com/RHunjan/random-password/tree/main">GitHub Link </a>, deployedLink: <a href="https://rhunjan.github.io/random-password/">Deployed App </a>, pic: photo4, desc: 'Password Generator',},
   { name: "Quiz", githublink: <a href="https://github.com/RHunjan/something-new">GitHub Link </a>, deployedLink: <a href="https://rhunjan.github.io/something-new/">Deployed App </a>, pic: photo5, desc: 'something',},

 ];

  return (
   <section id="portfolio">
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
            alt={project.desc}
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