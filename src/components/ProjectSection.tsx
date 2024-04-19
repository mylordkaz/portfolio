import strive from '../assets/StriveShadow.png';
import crypt from '../assets/CryptrackShadow.png';
import './project.css';

export default function ProjectSection() {
  return (
    <>
      <div className="project-title">
        <h1>Projects</h1>
      </div>

      <div className="project-card">
        <div className="project-container">
          <img src={strive} alt="" />
          <div className="project-text">
            <h2>Strive</h2>

            <p>
              Strive is a modern, user-focused personnel management solution
              that lets you easily manage your most valuable resource: your
              team.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button>
            <a href="https://strive-management.com/">view project</a>
          </button>
        </div>
      </div>
      <div className="project-card">
        <div className="project-container">
          <img src={crypt} alt="" />
          <div className="project-text">
            <h2>Cryptrack</h2>

            <p>
              Enabling users to track their cryptocurrency investments, with
              real time coins prices.
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button>
            <a href="https://cryptrack-client.onrender.com">view project</a>
          </button>
        </div>
      </div>
    </>
  );
}
