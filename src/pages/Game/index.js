import { useEffect } from "react";

import { Header } from "../../components/Header";
import { CardBoard } from "../../components/CardBoard";
import { connect } from "react-redux";

import {
  setCards as setCardsAction,
  flippCard as flippCardAction,
} from "../../redux/actions/cards";

function createArray(height, width){
  var x = new Array(height);

  for (var i = 0; i < height; i++) {
  x[i] = new Array(width);
}

console.log(x);
return x;
} 

function GamePage({ cards, setCards, flippCard, game }) {
  useEffect(() => {
    const length = game.difficulty;
    let newCards = createArray(length, length)
    console.log(newCards)
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length; j++) {
        newCards[i][j] = {value: Math.floor((i*length + j)/2 )+1, flipped: false}
      }
    }
    setCards(newCards)
  }, [])


  return (
    <>
      <Header />
      <h1>Game page</h1>
      <CardBoard cards={cards} flippCard={flippCard}/>
    </>
  );
}

export default connect(({ cards, gameMode }) => ({ cards: cards.cards, game: gameMode.game }), {
  setCards: setCardsAction,
  flippCard: flippCardAction,
})(GamePage);