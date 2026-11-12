import './index.css';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from "./components/layout/About";
import Services from './components/layout/Services'
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

function App() {

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [activeSection]);

  function renderSection(){

    switch(activeSection){
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Home />
    }
  }

  return (
    <div className="App bg-white w-full min-h-screen flex flex-col">
        <Navbar setActiveSection={setActiveSection} activeSection={activeSection}/>
      

        <main className="w-full flex-1">
          {renderSection()}
        </main>
        <Footer />
      </div>
  );
}

export default App;
