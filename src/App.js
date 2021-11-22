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
import Nurse from "./components/Nurse";
//import Doctor from "./components/Doctor";
import Laboratory from "./components/Laboratory";

function App() {
  return (
    <>
      <Router>
        <Home title="QuickHeal" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/nurse">
            <Nurse />
          </Route>

          <Route path="/lab">
            <Laboratory />
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
        <div style={{ backgroundColor: "whitesmoke" }}>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
