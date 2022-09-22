import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';




function App() {

  const [contactSelected, setContactSelected] = useState(false);
 

  return (
    <div>
        <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
                  >
        </Nav>
        
            <main>
               {!contactSelected ? (
                 <>
                 <About></About>
                 <Portfolio></Portfolio>
                 <Resume></Resume>
        
               </>
             ) : (
            <ContactForm></ContactForm>
                )}
            
          
                
      </main>
         <Footer></Footer>
    </div>
  );
}

export default App;