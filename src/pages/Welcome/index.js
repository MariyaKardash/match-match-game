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
      <img src="/images/pages/welcome/Animals.png" alt="animals"></img>
      <img src="/images/pages/welcome/Floor.svg" alt="animals" width="100%"></img>
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
