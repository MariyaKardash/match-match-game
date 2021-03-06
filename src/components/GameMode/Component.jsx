import React from "react";
import { Link } from "react-router-dom";

import './GameMode.css'

import {
  setUser as setUserAction,
} from "../../redux/actions/user";

import {
  setGameMode as setGameModeAction,
} from "../../redux/actions/gameMode";

import { Difficulty } from "../Difficulty";
import { CardMode } from "../CardMode";
import { connect } from "react-redux";

function onClickButton(props) {
  const firstName = document.getElementById("firstNameInput")?.value;
  const secondName = document.getElementById("secondNameInput")?.value;
  const email = document.getElementById("emailInput")?.value;
  const difficulty = document.getElementById("difficultySelect").value;
  const cardMode = document.querySelector('input[name="radio"]:checked').value;
  if (!props.user) {
    props.setUser(firstName, secondName, email);
  }
  props.setGameMode(difficulty, cardMode);
}

function GameMode(props) {
  return (
    <div className="game-mode-container">
      <Difficulty />
      <CardMode />
      <Link to="/game">
        <button disabled={props.disabled} className="start-game-button" onClick={() => onClickButton(props)}>Start game</button>
      </Link>
    </div>
  );
}

export default connect(({ user }) => ({ user: user.user }), {
  setUser: setUserAction,
  setGameMode: setGameModeAction,
})(GameMode);
