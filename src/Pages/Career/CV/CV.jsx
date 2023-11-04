import { Container } from "react-bootstrap";
import "./CV.css";

const CV = () => {
  return (
    <div className="apply">
      <Container>
        <div className="apply-overlay"></div>
        <div className="apply-content">
          <h5>Didn’t Find the Position You’re Looking For? </h5>
          <h1>Send Us Your CV</h1>
          <button>Apply Now</button>
        </div>
      </Container>
    </div>
  );
};

export default CV;
