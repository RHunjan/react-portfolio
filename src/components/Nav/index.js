import React ,{useState} from 'react';
 

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header>
       <h2>
       <a href="#about">
           Reena Hunjan, CFA, FDP
         </a>
       </h2>
    <nav>
      <ul className="flex-row">
                <li className="mx-2">
               <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
            </li>
             <li className="mx-2">
              <a data-testid="about" href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
            </li>
              <li className="mx-2">
               <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
              <li className="mx-2">
                <a href="resume">Resume</a>
            </li>
        </ul>


    </nav>
         

    </header>
 
  );
}

export default Nav;