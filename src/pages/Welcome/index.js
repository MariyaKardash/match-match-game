import { useEffect } from "react";
import { connect } from "react-redux";

import { Header } from "../../components/Header";
import { GameMode } from "../../components/GameMode";
import { WelcomeInput } from "../../components/WelcomeInput";

import {
  getUser as getUserAction,
  setUser as setUserAction,
} from "../../redux/reducers/user";

function WelcomePage({ user, getUser, setUser }) {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header />
      <div className="welcome-container">
        {user && Object.keys(user).length ? (
          <h1>{user.firstName}, welcome to Match-Match Game</h1>
        ) : (
            <>
          <h1>Welcome to Match-Match Game</h1>
          <WelcomeInput/>
          </>
        )}
        <GameMode/>
      </div>
    </>
  );
}

export default connect(({ userReducer }) => ({ user: userReducer.user }), {
  getUser: getUserAction,
  setUser: setUserAction,
})(WelcomePage);
