import { getScoreFromLocalStorage } from "../../localStorage";

import "./Congratulations.css";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function CongratulationsPage() {
  let scoreRecords = getScoreFromLocalStorage();

  let lastRecord = scoreRecords[scoreRecords.length - 1];

  return (
    <>
      <Header />
      <div className="congrat-container">
        <img
          src="/images/pages/congratulations/Wall-congrat.svg"
          alt="wall"
          className="wall-congrat-image"
        ></img>
        <img
          src="/images/pages/congratulations/Animals-congrat.svg"
          alt="animals"
          className="animals-congrat-image"
        ></img>
        <div className="congrat-text">
          <div className="congrat-description">
            <h1>{lastRecord.user.firstName}, congratulations!</h1>
            <h3>You won:)</h3>
            <div>Difficulty: {lastRecord.mode.difficulty}</div>
            <div>Card theme: {lastRecord.mode.cardTheme}</div>
            <div>Time: {lastRecord.time}</div>
            <div>Steps: {lastRecord.score.step}</div>
          </div>

          <div className="congrat-buttons">
            <Link to="/records">
              <button className="btn congrat-button">Records</button>
            </Link>
            <Link to="/welcome">
              <button className="btn congrat-button">New game</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
