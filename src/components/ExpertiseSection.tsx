import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import './expertise.css';
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiExpress, SiNetlify, SiPrisma, SiTailwindcss } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

export default function ExpertiseSection() {
  return (
    <>
      <div className="expertise">
        <div className="exp-title">
          <h1>Expertise</h1>
        </div>
        <div className="container-wrap">
          <div className="exp-container">
            <h4>Front-end:</h4>
            <p>working with JavaScript & TypeScript on the React Framework.</p>
            <p>Also, CSS with Tailwind or Vanilla & Chakra UI</p>
            <div className="icon-container">
              <FaReact />
              <BiLogoTypescript />
              <BiLogoJavascript />
              <FaHtml5 />
              <FaCss3Alt />
              <SiTailwindcss />
            </div>
          </div>

          <div className="exp-container">
            <h4>Back-end:</h4>
            <p>working with Node.js & Express.js, using also TypeScript.</p>
            <p>PosgreSQL database with Prisma ORM </p>
            <div className="icon-container">
              <BiLogoTypescript />
              <FaNodeJs />
              <SiExpress />
              <SiPrisma />
              <BiLogoPostgresql />
            </div>
          </div>
          <div className="exp-container">
            <h4>Other:</h4>
            <p>Deployment with Netlify and Render.</p>
            <p>Authentication & cloud with Firebase.</p>
            <div className="icon-container">
              <SiNetlify />
              <IoLogoFirebase />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
