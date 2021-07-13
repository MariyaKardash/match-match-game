import {
  WAIT_FIRST_ITEM,
  WAIT_SECOND_ITEM,
  UNSUCCESS_TWO,
} from "../../redux/constants";

import { Card } from "../Card";
import { Stopwatch } from "../Watch";

export function CardBoard({
  cards,
  flippCard,
  gameState,
  waitFirstItem,
  waitSecondItem,
  unsuccessTwo,
}) {
  function onClickHandler(card, row, column) {
    if (!card.flipped) {
      switch (gameState.state) {
        case WAIT_FIRST_ITEM:
          flippCard(row, column);
          waitSecondItem(card);
          break;
        case WAIT_SECOND_ITEM:
          flippCard(row, column);
          if (gameState.firstItem.value === card.value) {
            waitFirstItem();
          } else {
            unsuccessTwo(gameState.firstItem, card);
          }
          break;
        case UNSUCCESS_TWO:
          flippCard(gameState.secondItem.row, gameState.secondItem.column);
          flippCard(gameState.firstItem.row, gameState.firstItem.column);
          flippCard(row, column);
          waitSecondItem(card);
          break;
        default:
          break;
      }
    }
  }

  return (
    <table>
      <tbody>
        {cards.map((rowOfCards, indexOfRow) => (
          <tr key={indexOfRow}>
            {rowOfCards.map((card, indexOfColumn) => (
              <td
                key={indexOfColumn}
                onClick={() => onClickHandler(card, indexOfRow, indexOfColumn)}
              >
                <Card card={card} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
