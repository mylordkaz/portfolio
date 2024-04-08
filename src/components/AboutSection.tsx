import me from '../assets/me.jpg';
import './about.css';
export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-title">
          <h1>About</h1>
        </div>

        <div className="presentation-container">
          <img src={me} alt="" />
          <h2>I'm a Full-Stack Software Engineer based in Japan.</h2>
          <p>
            "After gaining valuable skills in management and customer service
            during my career in hospitality, I've transitioned to software
            engineering, driven by a passion for technology and its potential
            impact."
          </p>
          <div className="description-container">
            <p>
              "I love learning and embracing new challenges. I'm always seeking
              to improve my programming skills and learn new languages that I
              find both interesting and powerful. I have a great interest for
              blockchain and web3 in general."
            </p>

            <p>
              "When it comes to my hobbies, I'm passionate about motorsports and
              mechanics. During my spare time, you'll often find me tinkering in
              my garage."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
