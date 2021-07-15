const userModuleName = "user";
const gameModuleName = "gameMode";
const cardsModuleName = "cards";
const gameStateModuleName = "gameState";
const scoreModuleName = "score";
const timerModuleName = "timer";

export const GET_USER = `${userModuleName}/GET_USER`;
export const SET_USER = `${userModuleName}/SET_USER`;

export const GET_GAME_MODE = `${gameModuleName}/GET_GAME_MODE`;
export const SET_GAME_MODE = `${gameModuleName}/SET_GAME_MODE`;

export const SET_CARDS = `${cardsModuleName}/SET_CARDS`;
export const FLIPP_CARD = `${cardsModuleName}/FLIPP_CARD`;

export const WAIT_FIRST_ITEM = `${gameStateModuleName}/WAIT_FIRST_ITEM`;
export const WAIT_SECOND_ITEM = `${gameStateModuleName}/WAIT_SECOND_ITEM`;
export const UNSUCCESS_TWO = `${gameStateModuleName}/UNSUCCESS_TWO`;
export const FINISHED = `${gameStateModuleName}/FINISHED`;
export const RESTART = `${gameStateModuleName}/RESTART`;

export const SET_SCORE = `${scoreModuleName}/SET_SCORE`;
export const SET_STEP = `${scoreModuleName}/SET_STEP`;

export const SET_TIME = `${timerModuleName}/SET_TIME`;