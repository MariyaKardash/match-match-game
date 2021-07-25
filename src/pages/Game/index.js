import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Game.css";

import { store } from "../../redux/store";

import { Timer } from "../../components/Timer";
import { Header } from "../../components/Header";
import CardBoard from "../../components/CardBoard/Component";

import { setCards as setCardsAction } from "../../redux/actions/cards";

import { getUser as getUserAction } from "../../redux/actions/user";

import {
  waitFirstItem as waitFirstItemAction,
  restart as restartAction,
} from "../../redux/actions/gameState";

import { getGameMode as getGameModeAction } from "../../redux/actions/gameMode";

import {
  setScore as setScoreAction,
  setStep as setStepAction,
} from "../../redux/actions/score";

import { setTime as setTimeAction } from "../../redux/actions/timer";
import { alphabet, summer } from "../../arrays";

function shuffleArray(a) {
  let j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function createArray(height, width) {
  var x = new Array(height);

  for (var i = 0; i < height; i++) {
    x[i] = new Array(width);
  }

  return x;
}

function fillArray(length, array = null) {
  let newCards = createArray(length, length);
  let indices = [];
  if (array) {
    let newArray = array.slice(0, length ** 2 / 2);
    indices = [...newArray, ...newArray];
  } else {
    for (let index = 0; index < length * length; index++) {
      indices.push(Math.floor(index / 2) + 1);
    }
  }

  shuffleArray(indices);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      newCards[i][j] = {
        value: indices[i * length + j],
        flipped: false,
        row: i,
        column: j,
      };
    }
  }
  return newCards;
}

function renderCards(props) {
  switch (store.getState().gameMode.game.cardTheme) {
    case "numbers":
      props.setCards(fillArray(store.getState().gameMode.game.difficulty));
      break;
    case "alphabet":
      props.setCards(
        fillArray(store.getState().gameMode.game.difficulty, alphabet)
      );
      break;
    case "summer":
      props.setCards(
        fillArray(store.getState().gameMode.game.difficulty, summer)
      );
      break;
    default:
      break;
  }
}

function GamePage(props) {
  useEffect(() => {
    props.waitFirstItem();
    props.getUser();
    props.getGameMode();
    renderCards(props);
    return () => {
      onClickRestart();
    };
  }, []);

  function onClickRestart() {
    props.restart();
    props.setScore(0);
    props.setStep(0);
    renderCards(props);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <div className="game-parameters">
          <div className="timer">
            <h3>Time:</h3>
            <Timer
              gameState={props.gameState}
              setTime={props.setTime}
              waitFirstItem={props.waitFirstItem}
            />
          </div>

          <div className="scores-steps">
            <h3>Score: {props.score}</h3>
            <h3>Steps: {props.step}</h3>
          </div>
        </div>

        <CardBoard />

        <div className="game-buttons">
          <button onClick={() => onClickRestart()} className="game-button">
            Restart
          </button>
          <Link to="/welcome">
            <button className="game-button">New game</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default connect(
  ({ gameState, score }) => ({
    gameState: gameState.gameState,
    score: score.score,
    step: score.step,
  }),
  {
    getGameMode: getGameModeAction,
    getUser: getUserAction,
    setCards: setCardsAction,
    waitFirstItem: waitFirstItemAction,
    restart: restartAction,
    setScore: setScoreAction,
    setTime: setTimeAction,
    setStep: setStepAction,
  }
)(GamePage);
