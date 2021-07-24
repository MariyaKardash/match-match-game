import React, { useState, useEffect } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import { getUserFromLocalStorage } from "../../localStorage";

export function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const onClickMenuIcon = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  }

  useEffect(() => {
    showButton()
  }, [])

  function onClickHome() {
    closeMobileMenu();
    window.scrollTo(0, 0);
  }

  function onClickRules() {
    closeMobileMenu();
    window.scrollTo(0, 709);
  }

  function onClickStart() {
    closeMobileMenu();
    window.scrollTo(0, 1418);
  }

  window.addEventListener('resize', showButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/welcome" className="navbar-logo" onClick={closeMobileMenu}>
            MMG <i className="fas fa-gamepad"></i>
          </Link>
          <div className="menu-icon" onClick={onClickMenuIcon}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links"
                onClick={onClickHome}
              >
                Home
              </Link>
            </li>
            {getUserFromLocalStorage() ? <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li> : ''}
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links"
                onClick={onClickRules}
              >
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links-mobile"
                onClick={onClickStart}
              >
                Get started
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline" onClick={onClickStart}>Get started</Button>}
        </div>
      </nav>
    </>
  );
}
