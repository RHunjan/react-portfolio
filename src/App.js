import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';




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
         <Portfolio></Portfolio>
          <About></About>
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