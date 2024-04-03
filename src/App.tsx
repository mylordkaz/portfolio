import { Element } from 'react-scroll';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectSection from './components/ProjectSection';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Element name="projects">
        <ProjectSection />
      </Element>
      <Element name="expertise">
        <ExpertiseSection />
      </Element>
    </>
  );
}

export default App;
