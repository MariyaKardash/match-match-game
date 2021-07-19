import ReactCardFlip from "react-card-flip";
import { store } from "../../redux/store";
import { CardDiv, ImageForCard } from "../styled";

export function Card({ card }) {
  if(store.getState().gameMode.game.cardTheme === 'alphabet' || store.getState().gameMode.game.cardTheme === 'summer') {
    return (
      <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
        {(card.row + card.column) % 2 ? (
          <CardDiv className="rose" />
        ) : (
          <CardDiv className="violet" />
        )}
  
        <ImageForCard src={card.value}/>
      </ReactCardFlip>
    );
  }
  return (
    <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
      {(card.row + card.column) % 2 ? (
        <CardDiv className="rose" />
      ) : (
        <CardDiv className="violet" />
      )}

      <CardDiv>{card.value}</CardDiv>
    </ReactCardFlip>
  );
}
