import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Portfolio from './components/Portfolio.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}

export default App;
