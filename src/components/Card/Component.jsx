import ReactCardFlip from "react-card-flip";
import { store } from "../../redux/store";

export function Card({ card, className }) {
  let styleObject = {};
  if (className === "little-card") {
    styleObject = {
      width: "100px",
      height: "100px",
      padding: "1px",
      margin: "3px",
    };
  } else if (className === "medium-card") {
    styleObject = {
      width: "70px",
      height: "70px",
      padding: "1px",
      margin: "3px",
    };
  } else {
    styleObject = {
      width: "55px",
      height: "55px",
      padding: "1px",
      margin: "3px",
    };
  }
  if (
    store.getState().gameMode.game.cardTheme === "alphabet" ||
    store.getState().gameMode.game.cardTheme === "summer"
  ) {
    return (
      <ReactCardFlip
        isFlipped={card.flipped}
        flipDirection="horizontal"
        containerStyle={styleObject}
      >
        <img
          src="/images/pages/game/Flower.svg"
          alt="flower"
          className={`card-item margin ${className}`}
        />

        <img src={card.value} alt="card" className={`margin ${className}`} />
      </ReactCardFlip>
    );
  }
  return (
    <ReactCardFlip
      isFlipped={card.flipped}
      flipDirection="horizontal"
      containerStyle={styleObject}
    >
      <img
        src="/images/pages/game/Flower.svg"
        alt="flower"
        className={`card-item margin ${className}`}
      />

      <div className={`card-item margin ${className}`}>{card.value}</div>
    </ReactCardFlip>
  );
}
