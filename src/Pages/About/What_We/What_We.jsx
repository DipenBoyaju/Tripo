import { Container } from "react-bootstrap";
import "./What_We.css";
import Founder from "../Founder/Founder";

const What_We = () => {
  return (
    <div className="what-we">
      <div className="what-we-overlay"></div>
      <Container>
        <div className="what-we-content">
          <h1>What We Are About</h1>
          <div className="what-we-cards">
            <div className="what-we-card">
              <h3>Accomplishment</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
            <div className="what-we-card">
              <h3>Creativity</h3>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
          <div className="what-we-card">
            <h3>Community</h3>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default What_We;
