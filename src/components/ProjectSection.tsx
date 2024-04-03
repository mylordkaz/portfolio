import strive from '../assets/StriveShadow.png';
import crypt from '../assets/CryptrackShadow.png';
import './project.css';

export default function ProjectSection() {
  return (
    <>
      <div>
        <h2>Projects</h2>
      </div>

      <div className="project-container">
        <img src={strive} alt="" />
        <div>
          <h3>Strive</h3>

          <p>
            Strive is a modern, user-focused personnel management solution that
            lets you easily manage your most valuable resource: your team.
          </p>
        </div>
        <button>view project</button>
      </div>
      <div className="project-container">
        <img src={crypt} alt="" />
        <div>
          <h3>Cryptrack</h3>

          <p>Enabling users to track their cryptocurrency investments</p>
        </div>
        <button>view project</button>
      </div>
    </>
  );
}
