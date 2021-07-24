export function getScoreFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("scores")) || null;
}

export const setScoreToLocaleStorage = (mode, time, score, user) => {
  const lastScore = {
    mode,
    time,
    score,
    user,
  };
  const allScores = getScoreFromLocalStorage()
    ? [...getScoreFromLocalStorage(), lastScore]
    : [lastScore];
  window.localStorage.setItem("scores", JSON.stringify(allScores));
};

export function getGameModeFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("gameMode")) || null;
}

export function getUserFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem("user")) || null;
}