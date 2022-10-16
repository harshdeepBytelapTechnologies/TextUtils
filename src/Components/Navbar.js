import React from "react";
import PropTypes from "prop-types";
import About from "./About";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const navbarVar = "Props from Navbar";
  const navAppVar = props.AppVar;
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/* //Backtick is used for template literal */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.about}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
            {/* <label> Enable Dark Mode </label> */}
            <input
              className="form-check-input mx-5"
              type="color"
              placeholder="switch"
              value={props.mode}
              onChange={props.changeCustomColor}
            />
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.ModeToggle}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {props.mode === "light" ? "Dark" : "Light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      {/* <About /> */}

      <div className="container"></div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Default Title ",
  about: " Default About",
};
