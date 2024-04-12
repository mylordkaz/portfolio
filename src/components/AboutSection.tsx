import me from '../assets/me.jpg';
import './about.css';
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <h1>About.</h1>
        </div>

        <div className="presentation-container">
          <img src={me} alt="photo portrait of me" />
          <h2>I'm a Full-Stack Software Engineer based in Japan.</h2>
          <p className="p1">
            "After gaining valuable skills in management and customer service
            during my career in hospitality. <br /> I've transitioned to
            software engineering, driven by a passion for technology and its
            potential impact. <br /> I am very interested about Blockchain and
            Web3 in general."
          </p>
          <div className="horizontal-bar"></div>
          <div className="description-container">
            <p>
              "I love learning and embracing new challenges. I'm always seeking
              to improve my programming skills and learn new languages that I
              find both interesting and powerful."
            </p>
            <div className="horizontal-bar"></div>
            <p>
              "When it comes to my hobbies, <br /> I'm passionate about
              motorsports and mechanics. During my spare time, you'll often find
              me tinkering in my garage."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
