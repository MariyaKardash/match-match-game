import React from "react";
import './WelcomeInput.css'
import { Input } from "../Input";

export function WelcomeInput() {
  return (
    <form className="welcome-form">
      <Input id="firstNameInput" type="text" placeholder="First name" />
      <Input id="secondNameInput" type="text" placeholder="Second name" />
      <Input id="emailInput" type="email" placeholder="Email" />
    </form>
  );
}
