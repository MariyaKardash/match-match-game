const userModuleName = "user";
const gameModuleName = "gameMode";
const cardsModuleName = "cards";
const gameStateModuleName = "gameState";
const watchModuleName = "watch";

export const GET_USER = `${userModuleName}/GET_USER`;
export const SET_USER = `${userModuleName}/SET_USER`;

export const GET_GAME_MODE = `${gameModuleName}/GET_GAME_MODE`;
export const SET_GAME_MODE = `${gameModuleName}/SET_GAME_MODE`;

export const SET_CARDS = `${cardsModuleName}/SET_CARDS`;
export const FLIPP_CARD = `${cardsModuleName}/FLIPP_CARD`;

export const WAIT_FIRST_ITEM = `${gameStateModuleName}/WAIT_FIRST_ITEM`
export const WAIT_SECOND_ITEM = `${gameStateModuleName}/WAIT_SECOND_ITEM`
export const UNSUCCESS_TWO = `${gameStateModuleName}/UNSUCCESS_TWO`

export const START_TIME = `${watchModuleName}/START_TIME`;
export const STOP_TIME = `${watchModuleName}/STOP_TIME`;
export const RESET_TIME = `${watchModuleName}/RESET_TIME`;
export const SET_TIME = `${watchModuleName}/SET_TIME`;
export const TICK = `${watchModuleName}/TICK`;