import ReactCardFlip from "react-card-flip";
import { store } from "../../redux/store";
import { CardDiv } from "../styled";

export function Card({ card, className }) {
  if(store.getState().gameMode.game.cardTheme === 'alphabet' || store.getState().gameMode.game.cardTheme === 'summer') {
    return (
      <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
        <img src='/images/pages/game/Flower.svg' alt="flower" className={`card-item ${className}`}/>
  
        <img src={card.value} alt="card" className={className}/>
      </ReactCardFlip>
    );
  }
  return (
    <ReactCardFlip isFlipped={card.flipped} flipDirection="horizontal">
<img src='/images/pages/game/Flower.svg' alt="flower" className={`card-item ${className}`}/>

      <CardDiv className={className}>{card.value}</CardDiv>
    </ReactCardFlip>
  );
}
