import ReactCardFlip from "react-card-flip";
import { CardDiv, ImageForCard } from "../styled";

export function Card({ card }) {
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
