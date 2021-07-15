import { SET_CARDS, FLIPP_CARD } from "../constants";

const defaultState = { cards: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case FLIPP_CARD:
      return {
        ...state,
        cards: state.cards.map((innerArray, index) => {
          if (index === action.payload.row)
            return innerArray.map((item, index) => {
              if (index === action.payload.column)
                return {
                  value: item.value,
                  flipped: !item.flipped,
                  row: action.payload.row,
                  column: action.payload.column,
                };
              return item;
            });
          return innerArray;
        }),
      };
    default:
      return state;
  }
};
