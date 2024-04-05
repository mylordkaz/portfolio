import './expertise.css';

export default function ExpertiseSection() {
  return (
    <>
      <div className="expertise">
        <h2>expertise</h2>
        <div className="container-wrap">
          <div className="exp-container">
            <h4>Front-end:</h4>
            <p>working with JavaScript & TypeScript on the React Framework.</p>
            <p>Also, CSS with Tailwind or Vanilla & Chakra UI</p>
            <div className="icon-container"></div>
          </div>

          <div className="exp-container">
            <h4>Back-end:</h4>
            <p>working with Node.js & Express.js, using also TypeScript.</p>
            <p>PosgreSQL database with Prisma ORM </p>
            <div className="icon-container"></div>
          </div>
          <div className="exp-container">
            <h4>Other:</h4>
            <p>Deployment with Netlify and Render.</p>
            <p>Authentication & cloud with Firebase.</p>
            <div className="icon-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}
