import { Container } from "react-bootstrap";
import "./Challenge.css";
import { useContext } from "react";
import { GameContext } from "../../../Context/GameContext";

const Challenge = ({ gameCatt }) => {
  const { all_games } = useContext(GameContext);
  return (
    <>
      {all_games.map((item) => {
        if (gameCatt === item.category) {
          return (
            <div
              className="challenge"
              key={item.id}
              style={{ backgroundImage: `url(${item.bg2})` }}
            >
              <div className="challenge-overlay"></div>
              <Container>
                <div className="challenge-content">
                  <h5>{item.subTitle}</h5>
                  <h1>{item.title2}</h1>
                  <p>{item.description2}</p>
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

export default Challenge;
