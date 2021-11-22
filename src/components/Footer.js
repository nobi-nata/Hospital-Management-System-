import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-4">
          <h4>QuickHeal</h4>
          <p>&nbsp;&nbsp;Get Well Soon Here</p>
          <br />
          <br />
        </div>

        <div className="col-md-4">
          <h4>Our Services</h4>
          <dl>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/">
                Home
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/about">
                About Us
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="/connect">
                Connect
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="">
                Login
              </a>
            </li>
          </dl>
          <br />
        </div>
        <div className="col-md-4">
          <h4>Follow Us</h4>
          <dl>
            <li style={{ listStyle: "none" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/profile.php?id=100074060727876"
              >
                <i class="fab fa-facebook-square"> Facebook</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.instagram.com/_quickheal_/"
              >
                <i class="fab fa-instagram-square"> Instagram</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="">
                <i class="fab fa-twitter-square"> Twitter</i>
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="">
                <i class="fab fa-linkedin"> LinkedIn</i>
              </a>
            </li>
          </dl>
        </div>
      </div>
      <br />
      <div
        style={
          ({ padding: "2%" },
          {
            textAlign: "center",
          })
        }
      >
        &copy;Copyright 2021-22@wt.project
      </div>
    </div>
  );
}
