import { Card } from "../Card";

export function CardBoard({ cards, flippCard }) {
  console.log(cards);

  return (
    <table>
      <tbody>
        {cards.map((rowOfCards, indexOfRow) => (
          <tr key={indexOfRow}>
            {rowOfCards.map((card, indexOfColumn) => (
              <td
                key={indexOfColumn}
                onClick={() => flippCard(indexOfRow, indexOfColumn)}
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
