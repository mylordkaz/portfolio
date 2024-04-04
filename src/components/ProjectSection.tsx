import strive from '../assets/StriveShadow.png';
import crypt from '../assets/CryptrackShadow.png';
import './project.css';

export default function ProjectSection() {
  return (
    <>
      <div className="project-title">
        <h1>Projects</h1>
      </div>

      <div className="project-container">
        <img src={strive} alt="" />
        <div className="project-text">
          <h2>Strive</h2>

          <p>
            Strive is a modern, user-focused personnel management solution that
            lets you easily manage your most valuable resource: your team.
          </p>
        </div>
        <div className="btn-container">
          <button>view project</button>
        </div>
      </div>
      <div className="project-container">
        <img src={crypt} alt="" />
        <div className="project-text">
          <h2>Cryptrack</h2>

          <p>Enabling users to track their cryptocurrency investments</p>
        </div>
        <div className="btn-container">
          <button>view project</button>
        </div>
      </div>
    </>
  );
}
