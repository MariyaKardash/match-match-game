import { SET_TIME } from "../constants";

export const setTime = (time) => (dispatch) => {
  try {
    dispatch({ type: SET_TIME, payload: time });
  } catch (error) {
    console.log(error);
  }
};