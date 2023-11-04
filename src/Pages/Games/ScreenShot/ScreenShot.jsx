import "./ScreenShot.css";
import { Container } from "react-bootstrap";
import kipon1 from "../../../assets/kipon1.webp";
import kipon2 from "../../../assets/kipon2.webp";
import { useContext } from "react";
import { GameContext } from "../../../Context/GameContext";

const ScreenShot = ({ gameCatt }) => {
  const { all_games } = useContext(GameContext);
  return (
    <>
      {all_games.map((item) => {
        if (gameCatt === item.category) {
          return (
            <div className="screenshot" key={item.id}>
              <Container>
                <h3>Screenshots</h3>
                <div className="shot-img">
                  <div className="img">
                    <img src={item.shot1} alt="" />
                  </div>
                  <div className="img">
                    <img src={item.shot2} alt="" />
                  </div>
                </div>
              </Container>
            </div>
          );
        }
      })}
    </>
  );
};

export default ScreenShot;
