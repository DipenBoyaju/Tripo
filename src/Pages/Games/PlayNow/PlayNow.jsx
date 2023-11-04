import { Container } from "react-bootstrap";
import "./PlayNow.css";
import Apple_store from "../../../assets/Apple-Store.webp";
import Google_store from "../../../assets/Google Play.webp";

const PlayNow = () => {
  return (
    <div className="playnow">
      <Container>
        <div className="playnow-card">
          <h1>Play Now</h1>
          <div className="play-image">
            <img src={Apple_store} alt="" />
            <img src={Google_store} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlayNow;
