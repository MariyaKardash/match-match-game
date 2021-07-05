const MODULE_NAME = 'game';

const GET_GAME_MODE = `${MODULE_NAME}/GET_GAME_MODE`

const initialState = { }

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
    case GET_GAME_MODE:
        return {...state, user: action.payload};
    default:
        return state;
}
};