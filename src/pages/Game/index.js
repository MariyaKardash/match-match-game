import { Header } from "../../components/Header";
import { CardBoard } from "../../components/CardBoard";
import { connect } from "react-redux";

import {
  setCards as setCardsAction,
  flippCard as flippCardAction,
} from "../../redux/actions/cards";

function GamePage({ cards, setCards, flippCard, game }) {
  console.log(game)
  return (
    <>
      <Header />
      <h1>Game page</h1>
      <CardBoard cards={cards} flippCard={flippCard}/>
    </>
  );
}

export default connect(({ cardsReducer, gameModeReducer }) => ({ cards: cardsReducer.cards, game: gameModeReducer.game }), {
  setCards: setCardsAction,
  flippCard: flippCardAction,
})(GamePage);