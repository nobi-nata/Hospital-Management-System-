import React from "react";
import Carausel from "./components/Carausel";
import Card from "./components/Card";
import Details from "./components/Details";

const Main = () => {
  return (
    <div>
      <div className="container" my-3>
        <Carausel />
      </div>
      <div className="container" my-5>
        <Details />
      </div>
      <div className="container" my-3>
        <Card />
      </div>
    </div>
  );
};

export default Main;
