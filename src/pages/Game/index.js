import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { store } from "../../redux/store";

import { Stopwatch } from "../../components/Watch";
import { Header } from "../../components/Header";
import { CardBoard } from "../../components/CardBoard";
import { Button } from "../../components/styled";

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
import { flowers } from "../../arrays";

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



function GamePage(props) {
  useEffect(() => {
    props.getUser();
    props.getGameMode();
    switch(store.getState().gameMode.game.cardTheme) {
      case 'numbers':
        props.setCards(fillArray(store.getState().gameMode.game.difficulty));
        break;

        default:
          break;
    }
  }, [props.getUser, props.getGameMode, props.setCards]);

  function onClickRestart() {
    props.restart();
    props.setScore(0);
    props.setStep(0);
    props.setCards(fillArray(store.getState().gameMode.game.difficulty));
  }

  return (
    <>
      <Header />
      <h1>Game page</h1>
      <Stopwatch
        gameState={props.gameState}
        setTime={props.setTime}
        waitFirstItem={props.waitFirstItem}
      />
      <p>Score: {props.score}</p>
      <p>Steps: {props.step}</p>
      <CardBoard
        time={props.time}
        cards={props.cards}
        setCards={props.setCards}
        flippCard={props.flippCard}
        waitFirstItem={props.waitFirstItem}
        waitSecondItem={props.waitSecondItem}
        unsuccessTwo={props.unsuccessTwo}
        gameState={props.gameState}
        finished={props.finished}
        score={props.score}
        step={props.step}
        restart={props.restart}
        setScore={props.setScore}
        setStep={props.setStep}
      />
      <Button onClick={() => onClickRestart()}>Restart</Button>
      <Link to="/welcome">
        <Button>New game</Button>
      </Link>
    </>
  );
}

export default connect(
  ({ cards, gameState, score, timer }) => ({
    time: timer.time,
    cards: cards.cards,
    gameState: gameState.gameState,
    score: score.score,
    step: score.step,
  }),
  {
    getGameMode: getGameModeAction,
    getUser: getUserAction,
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
  }
)(GamePage);
