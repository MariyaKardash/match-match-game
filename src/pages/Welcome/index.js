import { useEffect } from "react";
import { connect } from "react-redux";

import { Header } from "../../components/Header";
import { GameMode } from "../../components/GameMode";
import { WelcomeInput } from "../../components/WelcomeInput";

import {
  getUser as getUserAction,
  setUser as setUserAction,
} from "../../redux/actions/user";

import {
  setGameMode as setGameModeAction,
} from "../../redux/actions/gameMode";

function WelcomePage({ user, getUser, setUser, setGameMode }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

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
        <GameMode userData={user} setUser={setUser} setGameMode={setGameMode}/>
      </div>
    </>
  );
}

export default connect(({ user }) => ({ user: user.user }), {
  getUser: getUserAction,
  setUser: setUserAction,
  setGameMode: setGameModeAction,
})(WelcomePage);
