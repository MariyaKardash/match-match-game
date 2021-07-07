import { SET_GAME_MODE } from "../constants";

export const setGameMode = (difficulty, cardTheme) => (dispatch) => {
  const gameMode = {
    difficulty,
    cardTheme,
  };
  try {
    dispatch({ type: SET_GAME_MODE, payload: gameMode });
  } catch (error) {
    console.log(error);
  }
};
