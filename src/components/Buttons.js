import React from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  // function admin() {
  //     var x=document.getElementById("Admin");
  //     const value=x.id;
  //     // console.log("true");

  // }
  return (
    <div>
      <div
        className="container my-5 "
        style={{ paddingLeft: "25%", paddingTop: "10%", paddingBottom: "10%" }}
      >
        <button
          type="button"
          className="btn btn-outline-secondary my-3"
          id="Admin "
        >
          <Link style={{ textDecoration: "none" }} to="login-admin">
            Admin
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="Doctor "
        >
          <Link style={{ textDecoration: "none" }} to="login-doctor">
            Doctor
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-outline-secondary" id="Nurse ">
          <Link style={{ textDecoration: "none" }} to="login-nurse">
            Nurse
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="Receptionist"
        >
          <Link style={{ textDecoration: "none" }} to="login-recep">
            Receptionist
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-outline-secondary"
          id="Patient"
        >
          <Link style={{ textDecoration: "none" }} to="login-patient">
            Patient
          </Link>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <button type="button" className="btn btn-outline-info">Info</button>&nbsp;&nbsp;&nbsp;&nbsp;
<button type="button" className="btn btn-outline-dark">Dark</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
      </div>
    </div>
  );
}

// onClick={e => this.handleInput(e, "id")}
