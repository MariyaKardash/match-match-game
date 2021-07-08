import { GET_USER, SET_USER } from "../constants";


export const getUser = () => (dispatch) => {
    try {
      const userData = JSON.parse(window.localStorage.getItem("user"));
      dispatch({ type: GET_USER, payload: userData });
    } catch (error) {
      console.log(error);
    }
  };
  
export const setUser = (firstName, secondName, email) => async (dispatch) => {
    const userData = {
      firstName,
      secondName,
      email,
    };
    try {
      window.localStorage.setItem("user", JSON.stringify(userData));
      dispatch({ type: SET_USER, payload: userData });
    } catch (error) {
      console.log(error);
    }
};