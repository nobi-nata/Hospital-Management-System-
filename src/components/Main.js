import React from "react";
import Carausel1 from "./Carausel1";
import Card from "./Card";
import Details from "./Details";

const Main = () => {
  return (
    <div>
      <div className="container mb-3 ">
        <Carausel1 />
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
