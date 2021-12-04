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
//import Nurse from "./components/Nurse";
import Doctor from "./components/Doctor";
import Laboratory from "./components/Laboratory";
import Pharmacy from "./components/Pharmacy";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import ScrollToTop from "./components/scrollToTop";
import Buttons from "./components/Buttons";
import Admin from "./components/Admin";
//import Login from "./components/Login (2)";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <ScrollToTop />
          <Home title="  QuickHeal" />
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
              <Signup />
            </Route>

            <Route path="/login-admin">
              <Login name="Admin" />
            </Route>
            <Route path="/login-doctor">
              <Login name="Doctor" />
            </Route>
            <Route path="/login-nurse">
              <Login name="Nurse" />
            </Route>
            <Route path="/login-recep">
              <Login name="Receptionist" />
            </Route>
            <Route path="/login-patient">
              <Login name="Patient" />
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
