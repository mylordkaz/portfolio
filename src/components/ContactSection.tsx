import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './contact.css';
export default function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-title">
          <h1>Contact.</h1>
          <div className="contact-link">
            <a href="https://github.com/mylordkaz" target="_blank">
              <img className="github-icon" src={github} alt="" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-timsiline/"
              target="_blank"
            >
              <img className="linkedin-icon" src={linkedin} alt="" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
