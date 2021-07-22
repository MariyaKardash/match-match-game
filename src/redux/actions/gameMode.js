import { SET_GAME_MODE, GET_GAME_MODE } from "../constants";

export const setGameMode = (difficulty, cardTheme) => (dispatch) => {
  const gameMode = {
    difficulty,
    cardTheme,
  };
  window.localStorage.setItem("gameMode", JSON.stringify(gameMode));
  try {
    dispatch({ type: SET_GAME_MODE, payload: gameMode });
  } catch (error) {
    console.log(error);
  }
};

export const getGameMode = () => (dispatch) => {
  try {
    const gameMode = JSON.parse(window.localStorage.getItem("gameMode"));
    dispatch({ type: GET_GAME_MODE, payload: gameMode });
  } catch (error) {
    console.log(error);
  }
};
