import { SET_TIME } from "../constants";

const defaultState = { time: new Date(0,0,0,0,0,0).toLocaleString() };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};