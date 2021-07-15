export function getUserFromLocaleStorage() {
    return JSON.parse(window.localStorage.getItem("user"));
}

export function getScoreFromLocaleStorage() {
  return JSON.parse(window.localStorage.getItem("scores")) || null;
}

export const setScoreToLocaleStorage = (mode, time, score, user) => {
  const lastScore = {
    mode,
    time,
    score,
    user,
  };
  const allScores = getScoreFromLocaleStorage()
    ? [...getScoreFromLocaleStorage(), lastScore]
    : [lastScore];
  window.localStorage.setItem("scores", JSON.stringify(allScores));
};
