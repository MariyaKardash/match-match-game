import { useEffect } from "react";
import { connect } from "react-redux";

import "./Welcome.css";

import { Header } from "../../components/Header";
import GameMode from "../../components/GameMode/Component";
import { WelcomeInput } from "../../components/WelcomeInput";

import { getUser as getUserAction } from "../../redux/actions/user";

function WelcomePage({ user, getUser }) {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <Header />
      <div className="welcome-container">
        <div className="welcome-text">
          <h1 className="welcome-header">Welcome to match-match game</h1>
          <h2 className="welcome-description">
            Have fun and develop your memory at the same time
          </h2>
        </div>
        <div className="animals-wrapper">
          <img
            src="/images/pages/welcome/Animals.svg"
            alt="animals"
            className="animals-image"
          ></img>
        </div>
        <div className="floor-wrapper">
          <img
            src="/images/pages/welcome/Floor.svg"
            alt="floor"
            className="floor-image"
          ></img>
        </div>
      </div>

      <div className="rules-container">
        <div className="left-part-rules">
          <h2 className="rules-header">Rules</h2>
          <p>
            This game is a great family card game. You can play it with a
            regular pack of cards, or with picture cards that your child might
            like.
          </p>
          <p>
            Younger players are often able to compete with older players because
            they can be very good at memory-based games.
          </p>
          <ul className="rules-list">
            <li className="rules-list-item">
              The objective is to collect the most pairs of cards.
            </li>
            <li className="rules-list-item">
              Shuffle the cards and lay them on the table, face down, in rows.
            </li>
            <li className="rules-list-item">
              The youngest player goes first. Play then continues in a clockwise
              direction.
            </li>
            <li className="rules-list-item">
              On each turn, a player turns over any two cards (one at a time)
              and keeps them if the cards match (for instance, two kings).
            </li>
            <li className="rules-list-item">
              If they successfully match a pair they get to keep the cards, and
              that player gets another turn.
            </li>
            <li className="rules-list-item">
              When a player turns over two cards that do not match, those cards
              are turned face down again (in the same position) and it becomes
              the next player’s turn.
            </li>
            <li className="rules-list-item">
              The trick is to remember which cards are where.
            </li>
            <li className="rules-list-item">
              The person with the most pairs at the end of the game wins.
            </li>
          </ul>
        </div>
        <div className="right-part-rules">
          <img
            src="/images/pages/welcome/Rabbit.svg"
            alt="rabbit"
            className="rabbit-image"
          ></img>
          <img
            src="/images/pages/welcome/Plant-1.svg"
            alt="plant"
            className="plant-1-image"
          ></img>
          <img
            src="/images/pages/welcome/Plant-2.svg"
            alt="plant"
            className="plant-2-image"
          ></img>
          <img
            src="/images/pages/welcome/Wall.svg"
            alt="wall"
            className="wall-image"
          ></img>
          <img
            src="/images/pages/welcome/Plant-2.svg"
            alt="plant"
            className="plant-3-image"
          ></img>
        </div>
      </div>

      <div className="get-started-container">
      <div className="left-part-start-game">
          <img
            src="/images/pages/welcome/Bear.svg"
            alt="bear"
            className="bear-image"
          ></img>
        </div>
        <div className="right-part-start-game">
          <div className="cloud-wrapper"><img
            src="/images/pages/welcome/Cloud.svg"
            alt="cloud"
            className="cloud-image"
          ></img></div>
          
        <div className="form-wrapper">
          {user && Object.keys(user).length ? (
            <h1>{user.firstName}, welcome to Match-Match Game</h1>
          ) : (
            <>
              <h1>Welcome to Match-Match Game</h1>
              <WelcomeInput />
            </>
          )}
          <GameMode />
        </div>
        </div>
      </div>
    </div>
  );
}

export default connect(({ user }) => ({ user: user.user }), {
  getUser: getUserAction,
})(WelcomePage);
