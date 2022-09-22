import React ,{useState} from 'react';
 

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
    portfolioSelected,
    setPortfolioSelected
  } = props;

  function aboutState() {
   setPortfolioSelected(false);
   setContactSelected(false);
   
}

  return (
    <header>
       <h2>
       <a href="#about">
           Reena Hunjan, CFA, FDP
         </a>
       </h2>
    <nav>
      <ul className="flex-row">
               <li className={`mx-2 ${!contactSelected && `navActive`}`}
 
                >
               <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
            </li>
             <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
              <a data-testid="about" href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
            </li>
             <li className={`mx-2 ${contactSelected && 'navActive'}`}>
               <span onClick={() => setContactSelected(true)}>Contact</span>
              </li>
               <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                  <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>Resume</a>
            </li>
        </ul>


    </nav>
         

    </header>
 
  );
}

export default Nav;