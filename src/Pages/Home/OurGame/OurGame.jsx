import { Container } from "react-bootstrap";
import "./OurGame.css";
import explore_games from "../../../assets/explore_games";
import Apple_Store from "../../../assets/Apple-Store.webp";
import Google_Play from "../../../assets/Google Play.webp";
import ourgame_char from "../../../assets/ourgame-char.webp";
import { Link } from "react-router-dom";

const OurGame = () => {
  return (
    <div className="ourgame" id="ourGame">
      <Container>
        <div className="ourgame-top animate__animated animate__fadeIn">
          <h1>Our Games</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
        </div>
      </Container>
      <div className="ourgame-bottom">
        <Container>
          <div className="ourgame-list">
            {explore_games.map((item) => {
              return (
                <div
                  className="ourgames-card animate__animated animate__fadeInLeft"
                  key={item.id}
                >
                  <div className="ourgame-info">
                    <Link to={`/games/${item.category}`}>
                      <img src={item.pp} alt="" />
                    </Link>
                    <div className="ourgame-title">
                      <h4>{item.name}</h4>
                      <p>
                        {item.genre}-{item.cost}
                      </p>
                    </div>
                  </div>
                  <div className="ourgame-description">
                    <p>{item.description}</p>
                  </div>
                  <div className="ourgame-media">
                    <a href="">
                      <img src={Apple_Store} alt="" />
                    </a>
                    <a href="">
                      <img src={Google_Play} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="ourgames-card animate__animated animate__fadeInRight">
              <img src={ourgame_char} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurGame;
