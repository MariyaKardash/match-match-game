import { SET_CARDS, FLIPP_CARD } from "../constants";

export const setCards = (cards) => (dispatch) => {
  try {
    dispatch({ type: SET_CARDS, payload: cards });
  } catch (error) {
    console.log(error);
  }
};

export const flippCard = (row, column) => (dispatch) => {
  try {
    dispatch({ type: FLIPP_CARD, payload: { row, column } });
  } catch (error) {
    console.log(error);
  }
};
