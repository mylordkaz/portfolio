import { Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectSection from './components/ProjectSection';
import About from './components/AboutSection';
import Contact from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Element className="project-section" name="projects">
        <ProjectSection />
      </Element>
      <Element name="expertise">
        <ExpertiseSection />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
