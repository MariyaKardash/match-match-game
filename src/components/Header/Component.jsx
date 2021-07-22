import React, { useState, useEffect } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

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
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Get started
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn-outline">Get started</Button>}
        </div>
      </nav>
    </>
  );
}
