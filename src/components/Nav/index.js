import React from 'react';
 

function Nav() {
  return (
    <header>
       <h2>
    <a href="/">
      Reena Hunjan, CFA, FDP
    </a>
  </h2>
         <ul className="flex-row">
                <li className="mx-2">
                <a href="about">About Me</a>
            </li>
             <li className="mx-2">
                <a href="portfolio">Portfolio</a>
            </li>
              <li className="mx-2">
                <a href="contact">Contact</a>
            </li>
              <li className="mx-2">
                <a href="resume">Resume</a>
            </li>
        </ul>

    </header>
 
  );
}

export default Nav;