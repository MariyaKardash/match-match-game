import { getScoreFromLocaleStorage } from "../../localStorage";
import { Header } from "../../components/Header";
import { H3 } from "../../components/styled";

export function CongratulationsPage() {
    let scoreRecords = getScoreFromLocaleStorage();

    let lastRecord = scoreRecords[scoreRecords.length - 1];

    return(
    <>
        <Header/>
        <h1>{lastRecord.user.firstName}, CONGRATULATIONS!</h1>
        <H3>You win!!!</H3>
        <div>Difficulty: {lastRecord.mode.difficulty}</div>
        <div>Card theme: {lastRecord.mode.cardTheme}</div>
        <div>Time: {lastRecord.time.split(' ')[1]}</div>
        <div>Steps: {lastRecord.score.step}</div>
    </>
    )
}
