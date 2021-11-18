import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>{props.title}</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex flex-row-reverse bd-highlight mx-3">
            {" "}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <i class="fa-thin fa-house"></i>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/connect">
                  {props.aboutText1}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  aboutText1: PropTypes.string,
};

Home.defaultProps = {
  title: "QuickHeal",
  aboutText: "About",
  aboutText1: "Connect",
};
