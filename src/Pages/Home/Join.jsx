import { Container } from "react-bootstrap";
import "./Join.css";
import join_img from "../../assets/join.webp";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="join">
      <Container>
        <div className="join-content">
          <h5>Join Our Team</h5>
          <h1>
            It takes the world's best talent
            <br /> to change the game.
          </h1>
          <Link to="/career">
            <button>Explore Careers</button>
          </Link>
        </div>
        <div className="join-img ">
          <img
            src={join_img}
            alt=""
            className="animate__animated animate__fadeInUp"
          />
        </div>
      </Container>
    </div>
  );
};

export default Join;
