import { Card } from "../Card";

export function CardBoard({ cards, flippCard }) {

  function onClickHandler(card, row, column) {
    if(!card.flipped) {
      flippCard(row, column)
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
