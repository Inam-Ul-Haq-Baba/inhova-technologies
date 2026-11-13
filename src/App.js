import './index.css';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from "./components/layout/About";
import Services from './components/layout/Services'
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

function App() {

  const [activeSection, setActiveSection] = useState("home");
  const [activeServiceId, setActiveServiceId] = useState(null);

  useEffect(() => {
      window.scrollTo(0, 0);

      switch (activeSection) {
          case "home":
              document.title = "Inhova Technologies | Software Development & Digital Solutions";
              break;

          case "about":
              document.title = "About - Inhova Technologies";
              break;

          case "services":
              document.title = "Services - Inhova Technologies";
              break;

          case "contact":
              document.title = "Contact - Inhova Technologies";
              break;

          default:
              document.title = "Inhova Technologies";
      }

  }, [activeSection]);

  function navigateToSection(section) {
    setActiveServiceId(null);
    setActiveSection(section);

    // If already on the selected section, scroll to its top
    if (activeSection === section) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

  function renderSection(){

    switch(activeSection){
      case "home":
        return <Home navigateToSection={navigateToSection} setActiveSection={setActiveSection} setActiveServiceId={setActiveServiceId} />;
      case "about":
        return <About navigateToSection={navigateToSection} />;
      case "services":
        return <Services navigateToSection={navigateToSection} activeServiceId={activeServiceId} />;
      case "contact":
        return <Contact />;
      default:
        return <Home navigateToSection={navigateToSection} setActiveSection={setActiveSection} setActiveServiceId={setActiveServiceId} />
    }
  }

  return (
    <div className="App bg-white w-full min-h-screen flex flex-col">
        <Navbar navigateToSection={navigateToSection} activeSection={activeSection}/>
      

        <main className="w-full flex-1">
          {renderSection()}
        </main>
        <Footer navigateToSection={navigateToSection} setActiveSection={setActiveSection} setActiveServiceId={setActiveServiceId} />
      </div>
  );
}

export default App;
