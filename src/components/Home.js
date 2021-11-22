import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Home(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  <i class="fas fa-home"> Home</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  {/* {props.aboutText} */}
                  <i class="fas fa-plus-square"> About</i>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/nurse" ? "active" : ""
                  }`}
                  to="/nurse"
                >
                  <i class="fas fa-envelope"> Connect</i>{" "}
                  {/* {props.aboutText1} */}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/nurse" ? "active" : ""
                  }`}
                  to="/nurse"
                >
                  <i class="fas fa-sign-in-alt"> Login</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/nurse" ? "active" : ""
                  }`}
                  to="/nurse"
                >
                  <i class="fas fa-image">IMAGE</i> {/* {props.aboutText1} */}
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
