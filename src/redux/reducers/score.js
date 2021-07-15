import { GET_SCORE_FROM_LOCALE_STORAGE,SET_SCORE_TO_LOCALE_STORAGE, SET_SCORE, SET_STEP } from "../constants";

const defaultState = { score: 0, step: 0 };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.payload };
    case SET_STEP:
      return { ...state, step: action.payload };
    default:
      return state;
  }
};
