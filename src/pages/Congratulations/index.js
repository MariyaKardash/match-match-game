import { getScoreFromLocaleStorage } from "../../localStorage";
import { Header } from "../../components/Header";
import { Button } from "../../components/styled";
import { Link } from "react-router-dom";

export function CongratulationsPage() {
    let scoreRecords = getScoreFromLocaleStorage();

    let lastRecord = scoreRecords[scoreRecords.length - 1];

    return(
    <>
        <Header/>
        <h1>{lastRecord.user.firstName}, CONGRATULATIONS!</h1>
        <h3>You win!!!</h3>
        <div>Difficulty: {lastRecord.mode.difficulty}</div>
        <div>Card theme: {lastRecord.mode.cardTheme}</div>
        <div>Time: {lastRecord.time}</div>
        <div>Steps: {lastRecord.score.step}</div>

        <Link to="/records">
        <Button>Records</Button>
      </Link>
      <Link to="/welcome">
        <Button>New game</Button>
      </Link>
    </>
    )
}
