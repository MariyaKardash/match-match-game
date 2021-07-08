import { GET_USER, SET_USER } from "../constants";

const defaultState = {user: {firstName: 'NoName', secondName: '-', email:'mmg@gmail.com'}};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
