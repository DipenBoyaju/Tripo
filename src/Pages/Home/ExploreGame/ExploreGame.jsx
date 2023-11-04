import { Container } from "react-bootstrap";
import "./ExploreGame.css";
import explore_games from "../../../assets/explore_games";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import "animate.css";

const ExploreGame = () => {
  return (
    <div className="exploregame">
      <Container>
        <div className="games-list d-flex">
          {explore_games.map((item) => {
            return (
              <div
                className="game-card animate__animated animate__fadeInLeft"
                key={item.id}
              >
                <Link to={`games/${item.category}`}>
                  <div className="exploregame-overlay"></div>
                  <div className="game-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="game-info">
                    <h4>{item.name}</h4>
                    <p>
                      {item.genre}-{item.cost}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
          <div className="game-card ex-game animate__animated animate__fadeInLeft">
            <a href="#ourGame">
              <div className="exgame-info">
                <h4>
                  Explore Our
                  <br /> Games
                </h4>
                <BsArrowDown className="arrow" />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExploreGame;
