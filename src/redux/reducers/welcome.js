import { GET_USER, SET_GAME_MODE, SET_USER } from "../constants";

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_GAME_MODE:
      return { ...state, game: action.payload };
    default:
      return state;
  }
};
