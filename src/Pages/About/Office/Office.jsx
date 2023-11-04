import "./Office.css";
import office_cat from "../../../assets/officecat.webp";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Office = () => {
  return (
    <div className="office">
      <div className="office-overlay"></div>
      <Container>
        <div className="office-content">
          <div className="office-left">
            <h5>Our Offices</h5>
            <h1>Our Studio in San Francisco</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <div className="office-right">
            <div className="office-card">
              <img src={office_cat} alt="" />
              <h6>We’d Love to Work With You</h6>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                Let your users get to know you.
              </p>
              <Link to="/career">
                <button>Explore Opportunities</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Office;
