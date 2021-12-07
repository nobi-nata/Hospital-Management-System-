import React from "react";

export default function Connect() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Username
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                User ID
              </a>
              <a className="nav-link" href="#">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="md-form"
        style={{
          left: "40%",
          right: "40%",
          paddingLeft: "0%",
          paddingRight: "5%",
          marginBlockStart: "1%",
          marginLeft: "45%",
        }}
      >
        <h1>
          {" "}
          <label for="form7">Patient Details</label>
        </h1>
      </div>

      <div
        style={{
          left: "40%",
          right: "40%",
          paddingLeft: "5%",
          paddingRight: "5%",
          margin: "5%",
          marginBlockStart: "5%",
          marginLeft: "39%",
        }}
      >
        <form class="row g-3">
          <div class="col-auto">
            <input type="text area" placeholder="Patient name" row="4"></input>
          </div>

          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Patient details
            </button>
          </div>
        </form>
      </div>

      {/* <button className="btn btn-outline-secondary "style={{ left:"40%",right:"40%",paddingLeft:"5%",paddingRight:"5%",margin:"2%",marginBlockStart:"6%",marginLeft:"39%" }}> <h2>Patient <span className="label label-default">details</span></h2></button> */}
    </div>
  );
}
