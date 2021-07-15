import {
  SET_SCORE,
  SET_STEP,
} from "../constants";

export const setScore = (score) => (dispatch) => {
  try {
    dispatch({ type: SET_SCORE, payload: score });
  } catch (error) {
    console.log(error);
  }
};

export const setStep = (step) => (dispatch) => {
  try {
    dispatch({ type: SET_STEP, payload: step });
  } catch (error) {
    console.log(error);
  }
};
