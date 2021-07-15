import {
  WAIT_FIRST_ITEM,
  WAIT_SECOND_ITEM,
  UNSUCCESS_TWO,
} from "../../redux/constants";

import { setScoreToLocaleStorage } from "../../localStorage";

import { store } from "../../redux/store";

import { Card } from "../Card";

export function CardBoard(props) {
  function onClickHandler(card, row, column) {
    if (!card.flipped) {
      switch (props.gameState.state) {
        case WAIT_FIRST_ITEM:
          props.flippCard(row, column);
          props.waitSecondItem(card);
          break;
        case WAIT_SECOND_ITEM:
          props.setStep(props.step + 1);
          props.flippCard(row, column);
          if (props.gameState.firstItem.value === card.value) {
            props.setScore(props.score + 2);
            if (props.score + 2 === props.cards.length ** 2) {
              props.finished();
              setTimeout(() => {
                setScoreToLocaleStorage(
                  store.getState().gameMode.game,
                  store.getState().timer.time,
                  store.getState().score,
                  store.getState().user.user
                );
              }, 1000);
            } else {
              props.waitFirstItem();
            }
          } else {
            props.unsuccessTwo(props.gameState.firstItem, card);
          }
          break;
        case UNSUCCESS_TWO:
          props.flippCard(
            props.gameState.secondItem.row,
            props.gameState.secondItem.column
          );
          props.flippCard(
            props.gameState.firstItem.row,
            props.gameState.firstItem.column
          );
          props.flippCard(row, column);
          props.waitSecondItem(card);
          break;
        default:
          break;
      }
    }
  }

  return (
    <table>
      <tbody>
        {props.cards.map((rowOfCards, indexOfRow) => (
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
