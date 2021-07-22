import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/styled";
import { getScoreFromLocaleStorage } from "../../localStorage";

export function RecordsPage() {
  let records = getScoreFromLocaleStorage() ? getScoreFromLocaleStorage().sort((a, b) => {
      if((a.score.step > b.score.step) || (a.score.step === b.score.step && a.time > b.time)) return 1
      else return -1
  }).slice(0, 5) : null;
  return (
    <>
    <Header/>
    <table>
      <caption>Top-5 records</caption>
      <thead>
        <tr>
          <th>User name</th>
          <th>Steps</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {records ? records.map((elem, index) => (
          <tr key={index}>
            <td>
              {elem.user.firstName} {elem.user.secondName}
            </td>
            <td>{elem.score.step}</td>
            <td>{elem.time}</td>
          </tr>
        )) : ''}
      </tbody>
    </table>
    <Link to="/welcome">
        <Button>New game</Button>
    </Link>
    </>
  );
}
