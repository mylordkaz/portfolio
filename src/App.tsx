import { Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectSection from './components/ProjectSection';
import About from './components/AboutSection';

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
    </>
  );
}

export default App;
