import { Container } from "react-bootstrap";
import "./Tripo.css";
import tripo1 from "../../../assets/tripo1.webp";
import tripo2 from "../../../assets/tripo2.webp";
import { Link } from "react-router-dom";
import "animate.css";

const Tripo = () => {
  return (
    <div className="tripo">
      <Container>
        <div className="tripo-content animate__animated animate__fadeIn">
          <h5>About Tripo</h5>
          <h1>
            Your Source for Mobile
            <br /> Entertainment
          </h1>
          <p>
            I&apos;m a paragraph. Click here to add your own text and edit me.
            It &apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font. I’m a great place for
            you to tell a story and let your users know a little more about you.
          </p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="tripo-image animate__animated animate__fadeIn">
          <div className="tripo-img2">
            <img src={tripo2} alt="" />
          </div>
          <div className="tripo-img1">
            <div className="tripo-overlay"></div>
            <img src={tripo1} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tripo;
