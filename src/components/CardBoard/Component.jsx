import {
  WAIT_FIRST_ITEM,
  WAIT_SECOND_ITEM,
  UNSUCCESS_TWO,
} from "../../redux/constants";


import {getScoreFromLocaleStorage, setScoreToLocaleStorage} from '../../localeStorage'

import { store } from "../../redux/store";

import { Card } from "../Card";

export function CardBoard({
  cards,
  flippCard,
  gameState,
  waitFirstItem,
  waitSecondItem,
  unsuccessTwo,
  finished,
  score,
  setScore,
  step,
  setStep,
}) {
  function onClickHandler(card, row, column) {
    if (!card.flipped) {
      switch (gameState.state) {
        case WAIT_FIRST_ITEM:
          flippCard(row, column);
          waitSecondItem(card);
          break;
        case WAIT_SECOND_ITEM:
          setStep(step + 1);
          flippCard(row, column);
          if (gameState.firstItem.value === card.value) {
            setScore(score + 2);
            waitFirstItem();
            if (score + 2 === cards.length ** 2) {
              finished();
              setScoreToLocaleStorage(
                store.getState().gameMode.game,
                store.getState().timer.time,
                store.getState().score,
                store.getState().user.user,
              );
            }
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
