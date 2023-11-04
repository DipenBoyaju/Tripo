import { Container } from "react-bootstrap";
import "./GameBanner.css";
import { useContext } from "react";
import { GameContext } from "../../../Context/GameContext";

const GameBanner = ({ gameCatt }) => {
  const { all_games } = useContext(GameContext);
  return (
    <>
      {all_games.map((item) => {
        if (gameCatt === item.category) {
          return (
            <div
              className="game-banner"
              key={item.id}
              style={{ backgroundImage: `url(${item.bg1}` }}
            >
              <Container>
                <div className="games-content">
                  <div className="game-category">
                    <div className="game-title">
                      <img src={item.image} alt="" />
                      <div className="game-info">
                        <h5>{item.name}</h5>
                        <p>
                          {item.genre}-{item.cost}
                        </p>
                      </div>
                    </div>
                    <div className="game-description">
                      <h1>{item.title1}</h1>
                      <p>{item.description1}</p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default GameBanner;
