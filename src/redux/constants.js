const userModuleName = "user";
const gameModuleName = "gameMode";
const cardsModuleName = "cards";
const gameStateModuleName = "gameState";

export const GET_USER = `${userModuleName}/GET_USER`;
export const SET_USER = `${userModuleName}/SET_USER`;

export const SET_GAME_MODE = `${gameModuleName}/SET_GAME_MODE`;

export const SET_CARDS = `${cardsModuleName}/SET_CARDS`;
export const FLIPP_CARD = `${cardsModuleName}/FLIPP_CARD`;

export const WAIT_FIRST_ITEM = `${gameStateModuleName}/WAIT_FIRST_ITEM`
export const WAIT_SECOND_ITEM = `${gameStateModuleName}/WAIT_SECOND_ITEM`
export const UNSUCCESS_TWO = `${gameStateModuleName}/UNSUCCESS_TWO`