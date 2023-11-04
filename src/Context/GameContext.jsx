import { createContext } from "react";
import all_games from "../assets/games";
export const GameContext = createContext(null);

const GameContextProvider = (props) => {
  const contextValue = { all_games };
  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
