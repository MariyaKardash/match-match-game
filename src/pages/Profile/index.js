import { connect } from "react-redux";
import { Header } from "../../components/Header";

import { getUser as getUserAction } from "../../redux/actions/user";
import { getScoreFromLocalStorage } from "../../localStorage";

import "./Profile.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ProfilePage({ user, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  function onClickExit() {
    localStorage.removeItem("user");
  }

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
        .filter((elem) => elem.user.email === user.email)
        .slice(0, 5)
    : null;

  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-text">
            <h1 className="profile-header">
              Welcome, {user.secondName} {user.firstName}!
            </h1>
            <p>Your email: {user.email}</p>
            <Link to="/welcome">
              <button className="btn profile-button" onClick={onClickExit}>
                Exit
              </button>
            </Link>
          </div>
          <div className="profile-records">
            <h1>Top-5 your records</h1>
            {records.length
                  ?
            <table>
              <thead>
                <tr>
                  <th className="table-padding">Card theme</th>
                  <th className="table-padding">Difficulty</th>
                  <th className="table-padding">Steps</th>
                  <th className="table-padding">Time</th>
                </tr>
              </thead>
              <tbody>
                {records.map((elem, index) => (
                      <tr key={index}>
                        <td className="table-padding">{elem.mode.cardTheme}</td>
                        <td className="table-padding">
                          {elem.mode.difficulty}
                        </td>
                        <td className="table-padding">{elem.score.step}</td>
                        <td className="table-padding">{elem.time}</td>
                      </tr>
                    ))}
              </tbody>
            </table> : <div>List is empty...</div>}
          </div>
          <img
            src="/images/pages/profile/Bear-profile.svg"
            alt="bear"
            className="bear-profile-image"
          ></img>
        </div>
      </div>
    </>
  );
}

export default connect(({ user }) => ({ user: user.user }), {
  getUser: getUserAction,
})(ProfilePage);
