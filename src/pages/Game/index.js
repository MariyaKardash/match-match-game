import { useEffect } from "react";

import { Header } from "../../components/Header";
import { CardBoard } from "../../components/CardBoard";
import { connect } from "react-redux";

import {
  setCards as setCardsAction,
  flippCard as flippCardAction,
} from "../../redux/actions/cards";

import {
  waitFirstItem as waitFirstItemAction,
  waitSecondItem as waitSecondItemAction,
  unsuccessTwo as unsuccessTwoAction,
} from "../../redux/actions/gameState";

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

function GamePage({
  cards,
  setCards,
  flippCard,
  game,
  waitFirstItem,
  waitSecondItem,
  unsuccessTwo,
  gameState,
}) {
  useEffect(() => {
    const length = game.difficulty;
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
    setCards(newCards);
  }, []);

  return (
    <>
      <Header />
      <h1>Game page</h1>
      <CardBoard
        cards={cards}
        setCards={setCards}
        flippCard={flippCard}
        waitFirstItem={waitFirstItem}
        waitSecondItem={waitSecondItem}
        unsuccessTwo={unsuccessTwo}
        gameState={gameState}
      />
    </>
  );
}

export default connect(
  ({ cards, gameMode, gameState }) => ({
    cards: cards.cards,
    game: gameMode.game,
    gameState: gameState.gameState,
  }),
  {
    setCards: setCardsAction,
    flippCard: flippCardAction,
    waitFirstItem: waitFirstItemAction,
    waitSecondItem: waitSecondItemAction,
    unsuccessTwo: unsuccessTwoAction,
  }
)(GamePage);
