import React from "react";
// import logo from './logo.svg';
import "./App.css";

import Carausel from "./components/Carausel";
// import Carausel1 from './components/Carausel1';
import Card from "./components/Card";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from "react-router-dom";
import About from "./components/About";
import Connect from "./components/Connect";
import Nurse2 from "./components/Nurse2";
import Doctor2 from "./components/Doctor2";
import Laboratory from "./components/Laboratory";
import Pharmacy from "./components/Pharmacy";
import Patient from "./components/Patient";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import ScrollToTop from "./components/scrollToTop";
import Buttons from "./components/Buttons";
import Admin from "./components/Admin";
import AddNote from "./components/AddNote";
import AddNote1 from "./components/AddNote1";
//import Login from "./components/Login (2)";
import { useState } from "react";
import Alert from "./components/Alert";
import Receptionist from "./components/Receptionist";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <ScrollToTop />
          <Home title="  QuickHeal" />
          <Alert alert={alert} />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/connect">
              <Connect />
            </Route>
            <Route path="/login">
              <Buttons />
            </Route>
            <Route path="/signup">
              <Signup showAlert={showAlert} />
            </Route>

            <Route path="/login-admin">
              <Login name="Admin" showAlert={showAlert} />
            </Route>
            <Route path="/login-doctor">
              <Login name="Doctor" showAlert={showAlert} />
            </Route>
            <Route path="/login-nurse">
              <Login name="Nurse" showAlert={showAlert} />
            </Route>
            <Route path="/login-recep">
              <Login name="Receptionist" showAlert={showAlert} />
            </Route>
            <Route path="/login-patient">
              <Login name="Patient" showAlert={showAlert} />
            </Route>

            <Route path="/Admin">
              <Admin />
            </Route>
            <Route path="/Doctor">
              <Doctor2 />
            </Route>
            <Route path="/Nurse">
              <Nurse2 />
            </Route>
            <Route path="/Receptionist">
              <Receptionist />
            </Route>
            <Route path="/addnote">
              <AddNote showAlert={showAlert} />
            </Route>
            <Route path="/addnote1">
              <AddNote1 showAlert={showAlert} />
            </Route>
            <Route path="/Patient">
              <Patient />
            </Route>
            <Route path="/lab">
              <Laboratory />
            </Route>
            <Route path="/phar">
              <Pharmacy />
            </Route>
            <Route path="/">
              <div className="container" my-3>
                <Carausel />
              </div>
              <div className="container" my-5>
                <Details />
              </div>
              <div className="container" my-3>
                <Card />
              </div>
            </Route>
          </Switch>
          <div style={{ backgroundColor: "black" }}>
            <Footer />
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
