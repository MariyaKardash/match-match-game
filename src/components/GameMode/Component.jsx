import React from "react";
import { Link } from "react-router-dom";

import {
  setUser as setUserAction,
} from "../../redux/actions/user";

import {
  setGameMode as setGameModeAction,
} from "../../redux/actions/gameMode";

import { Difficulty } from "../Difficulty";
import { CardMode } from "../CardMode";
import { Button, Wrapper, H3 } from "../styled";
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
      <Wrapper>
        <H3>Rules</H3>
        <p>Rules will be here</p>
      </Wrapper>
      <Link to="/game">
        <Button onClick={() => onClickButton(props)}>Start game</Button>
      </Link>
    </div>
  );
}

export default connect(({ user }) => ({ user: user.user }), {
  setUset: setUserAction,
  setGameMode: setGameModeAction,
})(GameMode);
