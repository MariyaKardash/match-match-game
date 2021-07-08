import { SET_CARDS, FLIPP_CARD } from "../constants";

const defaultState = {cards:[
    [
      { value: 1, flipped: false },
      { value: 2, flipped: false },
    ],
    [
      { value: 3, flipped: true },
      { value: 4, flipped: false },
    ],
  ]};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: action.payload };
    case FLIPP_CARD:
        return {
            ...state,
            cards: state.cards.map((innerArray, index) => {
                if (index === action.payload.row) return innerArray.map((item, index) => {
                    if (index === action.payload.column) return {value: item.value, flipped: !item.flipped}
                    return item
                })
                return innerArray
            })
        };
    default:
      return state;
  }
};
