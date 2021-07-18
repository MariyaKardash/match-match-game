import { useEffect } from "react";
import { connect } from "react-redux";

import { Header } from "../../components/Header";
import GameMode from "../../components/GameMode/Component";
import { WelcomeInput } from "../../components/WelcomeInput";

import {
  getUser as getUserAction,
} from "../../redux/actions/user";

function WelcomePage({ user, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <>
      <Header />
      <div className="welcome-container welcome-background-main">
        <div className="main-header header-wrapper">
          WELCOME TO MEMORY GAME
        </div>
      </div>
      <div className="welcome-container welcome-background-second">
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

export default connect(({ user }) => ({ user: user.user }), {
  getUser: getUserAction,
})(WelcomePage);
