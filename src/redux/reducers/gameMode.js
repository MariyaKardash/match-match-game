import { SET_GAME_MODE, GET_GAME_MODE } from "../constants";

const defaultState = {game: {difficulty: 4, cardTheme: 'numbers'}};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_GAME_MODE:
      return { ...state, game: action.payload };
    case GET_GAME_MODE:
      return { ...state, game: action.payload };
    default:
      return state;
  }
};
