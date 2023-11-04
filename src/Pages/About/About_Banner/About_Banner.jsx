import { Container } from "react-bootstrap";
import "./About_Banner.css";

const About_Banner = ({ subTitle, title, info }) => {
  return (
    <div className="about">
      <Container>
        <div className="about-content">
          <h5>{subTitle}</h5>
          <h1>{title}</h1>
          <p>{info}</p>
        </div>
      </Container>
    </div>
  );
};

export default About_Banner;
