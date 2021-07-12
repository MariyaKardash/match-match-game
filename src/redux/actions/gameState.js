import { WAIT_FIRST_ITEM, WAIT_SECOND_ITEM, UNSUCCESS_TWO } from "../constants";

export const waitFirstItem = () => (dispatch) => {
  try {
    dispatch({ type: WAIT_FIRST_ITEM, payload: {state: WAIT_FIRST_ITEM, firstItem: null, secondItem: null}});
  } catch (error) {
    console.log(error);
  }
};

export const waitSecondItem = (firstItem) => (dispatch) => {
  try {
    dispatch({ type: WAIT_SECOND_ITEM, payload: {state: WAIT_SECOND_ITEM, firstItem, secondItem: null} });
  } catch (error) {
    console.log(error);
  }
};

export const unsuccessTwo = (firstItem, secondItem) => (dispatch) => {
    try {
      dispatch({ type: UNSUCCESS_TWO, payload: {state: UNSUCCESS_TWO, firstItem, secondItem } });
    } catch (error) {
      console.log(error);
    }
};
