import { Link } from "react-router-dom";

import "./Records.css";
import { Header } from "../../components/Header";
import { getScoreFromLocalStorage } from "../../localStorage";
import { getGameModeFromLocalStorage } from "../../localStorage";

export function RecordsPage() {
  let records = getScoreFromLocalStorage()
    ? getScoreFromLocalStorage()
        .sort((a, b) => {
          if (
            a.score.step > b.score.step ||
            (a.score.step === b.score.step && a.time > b.time)
          )
            return 1;
          else return -1;
        })
        .filter(
          (elem) =>
            +elem.mode.difficulty === +getGameModeFromLocalStorage().difficulty
        )
        .slice(0, 5)
    : null;

  return (
    <>
      <Header />
      <div className="records-container">
        <div className="records-left-part">
          <img
            src="/images/pages/records/Buterfly.svg"
            alt="buterfly"
            className="buterfly-image"
          ></img>
          <h1 className="records-header">Top-5 records</h1>
          <h3>In this difficulty ({getGameModeFromLocalStorage().difficulty}) </h3>
          {records.length
                ?
          (<table><thead>
              <tr>
                <th className="table-padding">User name</th>
                <th className="table-padding">Steps</th>
                <th className="table-padding">Time</th>
              </tr>
            </thead>
            <tbody>
              {records.map((elem, index) => (
                    <tr key={index}>
                      <td className="table-padding">
                        {elem.user.firstName} {elem.user.secondName}
                      </td>
                      <td className="table-padding">{elem.score.step}</td>
                      <td className="table-padding">{elem.time}</td>
                    </tr>
                  ))}
            </tbody>
          </table>) : <div>List is empty...</div>}
          <Link to="/welcome">
            <button className="btn records-button">New game</button>
          </Link>
        </div>
        <div className="records-right-part">
          <img
            src="/images/pages/records/Rabbit-records.svg"
            alt="rabbit"
            className="rabbit-records-image"
          ></img>
        </div>
      </div>
    </>
  );
}
