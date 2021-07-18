import {
  WAIT_FIRST_ITEM,
  WAIT_SECOND_ITEM,
  UNSUCCESS_TWO,
  FINISHED,
  RESTART,
} from "../constants";

const defaultState = {
  gameState: {
    state: WAIT_FIRST_ITEM,
    firstItem: null,
    secondItem: null,
  },
};

export const gameState = (state = defaultState, action) => {
  switch (action.type) {
    case WAIT_FIRST_ITEM:
      return { ...state, gameState: action.payload };
    case WAIT_SECOND_ITEM:
      return { ...state, gameState: action.payload };
    case UNSUCCESS_TWO:
      return { ...state, gameState: action.payload };
    case FINISHED:
      return { ...state, gameState: action.payload };
    case RESTART:
      return { ...state, gameState: action.payload };
    default:
      return state;
  }
};
