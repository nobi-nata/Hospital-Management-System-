import React from "react";
import { Link } from "react-router-dom";
export default function Admin() {
  return (
    <div>
      <div className="d-grid gap-2 col-6 mx-auto">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <button className="btn btn btn-info " type="button" value="SignUp">
          <Link
            // className={`nav-link ${
            //   location.pathname === "/signup" ? "active" : ""
            // }`}
            to="/signup"
          >
            <i className="fas fa-user-plus"> Signup</i>
          </Link>
        </button>
        <br />
        <div class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-info dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Link>
              {" "}
              <i className="fas fa-user-plus"> Recruitment</i>
            </Link>
          </button>
          <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li>
              <a className="dropdown-item">
                <Link to="/admin-doctor-login" name="Doctor ">
                  <i className="fas fa-user-plus"> Doctor</i>
                </Link>
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                <Link to="/admin-nurse-login" name="Nurse ">
                  <i className="fas fa-user-plus"> Nurse</i>
                </Link>
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                <Link to="/admin-recep-login" name="Receptionist ">
                  <i className="fas fa-user-plus"> Receptionist</i>
                </Link>
              </a>
            </li>
          </ul>
        </div>
        {/* <button
          className="btn btn btn-info "
          type="button"
          value="Recuruitment"
        >
          <Link to="addnote">
            {" "}
            <i className="fas fa-user-plus"> Recruitment</i>
          </Link>
        </button> */}
        <br />
        <button className="btn btn btn-info" type="button" value="Appointment">
          <Link to="/admin-patient-login">
            {" "}
            <i className="fas fa-user-plus"> Patient Appointment</i>
          </Link>
        </button>
        <br />
      </div>
    </div>
  );
}

// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongodb = require('mongodb');

// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, 'public')));

// app.post('/post-feedback', function (req, res) {
//     dbConn.then(function(db) {
//         delete req.body._id; // for safety reasons
//         db.collection('feedbacks').insertOne(req.body);
//     });
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.get('/view-feedbacks',  function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     });
// });

// app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
