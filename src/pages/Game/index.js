import { useEffect } from "react";

import { store } from "../../redux/store";

import { Header } from "../../components/Header";
import { CardBoard } from "../../components/CardBoard";
import { connect } from "react-redux";

import {
  setCards as setCardsAction,
  flippCard as flippCardAction,
} from "../../redux/actions/cards";

import { getUser as getUserAction } from "../../redux/actions/user";

import {
  waitFirstItem as waitFirstItemAction,
  waitSecondItem as waitSecondItemAction,
  unsuccessTwo as unsuccessTwoAction,
  finished as finishedAction,
  restart as restartAction,
} from "../../redux/actions/gameState";

import { getGameMode as getGameModeAction } from "../../redux/actions/gameMode";

import {
  setScore as setScoreAction,
  setStep as setStepAction,
} from "../../redux/actions/score";

import { setTime as setTimeAction } from "../../redux/actions/timer";

import { Stopwatch } from "../../components/Watch";
import { Button } from "../../components/styled";
import { Link } from "react-router-dom";

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

  console.log(x);
  return x;
}

function fillArray(length) {
  let newCards = createArray(length, length);
  let indices = [];
  for (let index = 0; index < length * length; index++) {
    indices.push(Math.floor(index / 2) + 1);
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

function GamePage({
  cards,
  time,
  step,
  setCards,
  flippCard,
  waitFirstItem,
  waitSecondItem,
  unsuccessTwo,
  finished,
  restart,
  gameState,
  getGameMode,
  score,
  setScore,
  setTime,
  setStep,
  getUser,
}) {
  useEffect(() => {
    getUser();
    getGameMode();
    setCards(fillArray(store.getState().gameMode.game.difficulty));
  }, [getUser, getGameMode, setCards]);

  function onClickRestart() {
    restart();
    setScore(0);
    setStep(0);
    setCards(fillArray(store.getState().gameMode.game.difficulty));
  }

  return (
    <>
      <Header />
      <h1>Game page</h1>
      <Stopwatch
        gameState={gameState}
        setTime={setTime}
        waitFirstItem={waitFirstItem}
      />
      <p>Score: {score}</p>
      <p>Steps: {step}</p>
      <CardBoard
        time={time}
        cards={cards}
        setCards={setCards}
        flippCard={flippCard}
        waitFirstItem={waitFirstItem}
        waitSecondItem={waitSecondItem}
        unsuccessTwo={unsuccessTwo}
        gameState={gameState}
        finished={finished}
        score={score}
        step={step}
        restart={restart}
        setScore={setScore}
        setStep={setStep}
      />
      <Button onClick={() => onClickRestart()}>Restart</Button>
      <Link to="/welcome">
        <Button>New game</Button>
      </Link>
    </>
  );
}

export default connect(
  ({ cards, gameMode, gameState, score, timer }) => ({
    time: timer.time,
    cards: cards.cards,
    game: gameMode.game,
    gameState: gameState.gameState,
    score: score.score,
    step: score.step,
  }),
  {
    getGameMode: getGameModeAction,
    setCards: setCardsAction,
    flippCard: flippCardAction,
    waitFirstItem: waitFirstItemAction,
    waitSecondItem: waitSecondItemAction,
    unsuccessTwo: unsuccessTwoAction,
    finished: finishedAction,
    restart: restartAction,
    setScore: setScoreAction,
    setTime: setTimeAction,
    setStep: setStepAction,
    getUser: getUserAction,
  }
)(GamePage);
