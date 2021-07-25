import React, { useEffect, useState } from "react";
import "./WelcomeInput.css";
import GameMode from '../GameMode/Component'

export function WelcomeInput() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameDirty, setFirstNameDirty] = useState("");
  const [secondNameDirty, setSecondNameDirty] = useState("");
  const [emailDirty, setEmailDirty] = useState("");

  const [firstNameError, setFirstNameError] = useState(
    "First name cannot be empty..."
  );
  const [secondNameError, setSecondNameError] = useState(
    "Second name cannot be empty..."
  );
  const [emailError, setEmailError] = useState("Email cannot be empty...");

  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if(firstNameError || secondNameError || emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [firstNameError, secondNameError, emailError])

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "first-name":
        setFirstNameDirty(true);
        break;
      case "second-name":
        setSecondNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email...");
    } else {
      setEmailError("");
    }
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 10) {
      setFirstNameError('Invalid first name...')
      if(!e.target.value) {
        setFirstNameError('First name cannot be empty...')
      }
    } else {
      setFirstNameError('')
    }
  }

  const secondNameHandler = (e) => {
    setSecondName(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length > 10) {
      setSecondNameError('Invalid second name...')
      if(!e.target.value) {
        setSecondNameError('Second name cannot be empty...')
      }
    } else {
      setSecondNameError('')
    }
  }

  return (
    <div className="welcome-form">
      {firstNameDirty && firstNameError && <div>{firstNameError}</div>}
      <input
        id="firstNameInput"
        type="text"
        name="first-name"
        placeholder="First name"
        className="welcome-input"
        onBlur={(e) => blurHandler(e)}
        value={firstName}
        onChange={(e) => firstNameHandler(e)}
      />
      {secondNameDirty && secondNameError && <div>{secondNameError}</div>}
      <input
        id="secondNameInput"
        type="text"
        name="second-name"
        placeholder="Second name"
        className="welcome-input"
        onBlur={(e) => blurHandler(e)}
        value={secondName}
        onChange={(e) => secondNameHandler(e)}
      />
      {emailDirty && emailError && <div>{emailError}</div>}
      <input
        id="emailInput"
        type="email"
        name="email"
        placeholder="Email"
        className="welcome-input"
        onBlur={(e) => blurHandler(e)}
        value={email}
        onChange={(e) => emailHandler(e)}
      />
      <GameMode disabled={!formValid}/>
    </div>
  );
}
