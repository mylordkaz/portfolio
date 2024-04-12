import main from '../assets/mainDesign.png';
import './hero.css';

export default function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <img className="main-img" src={main} alt="" />

        <div className="text-container">
          <div className="title-container">
            <p className="title-1">Software Engineer</p>
          </div>
          <span className="title-J">ソフトウェアエンジニア</span>
          <div className="text-detail">
            <p>
              Open for work, Full-Stack, Front-end. Available in Japan or Asian
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
