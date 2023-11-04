import { useContext } from "react";
import Challenge from "./Challenge/Challenge";
import GameBanner from "./GameBanner/GameBanner";
import "./Games.css";
import ScreenShot from "./ScreenShot/ScreenShot";
import { GameContext } from "../../Context/GameContext";
import PlayNow from "./PlayNow/PlayNow";
import Review from "./Review/Review";

const Games = ({ category }) => {
  const { all_games } = useContext(GameContext);
  console.log("categoryname", category);
  console.log("categoryname", all_games);
  return (
    <div>
      {all_games.map((item) => {
        console.log("dall", item.category);
        if (category === item.category) {
          return (
            <>
              <GameBanner gameCatt={item.category} />
              <ScreenShot gameCatt={item.category} />
              <Review />
              <Challenge gameCatt={item.category} />
              <PlayNow />
            </>
          );
        }
      })}
    </div>
  );
};

export default Games;
