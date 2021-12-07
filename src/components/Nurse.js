import React, { Component } from "react";
import Notes from "./Notes";

export default class Nurse extends Component {
  render() {
    return (
      <>
        <div className="my-4 mx-5">
          <div>
            <Notes />
          </div>
        </div>
      </>
    );
  }
}
