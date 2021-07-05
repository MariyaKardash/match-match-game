const moduleName = 'user';

const GET_USER = `${moduleName}/GET_USER`;
const SET_USER = `${moduleName}/SET_USER`;
const CREATE_POST = `${moduleName}/CREATE_POST`;

const defaultState = {
  user: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case SET_USER:
      return { ...state, user: 'new' };
    default:
      return state;
  }
};

export const getUser = () => (dispatch) => {
  try {
      const userData = JSON.parse(window.localStorage.getItem('user'));
      dispatch({type: GET_USER, payload: userData })
  } catch (error) {
    console.log(error)
  }
}

export const setUser = (firstName, secondName, email) => async (dispatch) => {
    const userData = {
        firstName,
        secondName,
        email
    }
  try {
      window.localStorage.setItem('user', JSON.stringify(userData));
    dispatch({ type: SET_USER, payload: userData})
  } catch (error) {
    console.log(error)
  }
}