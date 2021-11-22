import React, { Component } from "react";

export default class Nurse extends Component {
  render() {
    return (
      <div className="my-5 py-5">
        {/* <img src="harsha.jpg" alt="..." /> */}
        <div>
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md-4">
                <h4>
                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bs-example-modal-sm"
                  >
                    USERNAME
                  </button>

                  <div
                    class="modal bs-example-modal-sm"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-footer"></div>
                      </div>
                    </div>
                  </div>
                </h4>
                <p>&nbsp;&nbsp;USER NAME DETAILS</p>
                <br />
                <br />
              </div>

              <div className="col-md-4">
                <h4>
                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bs-example-modal-sm"
                  >
                    USER ID
                  </button>

                  <div
                    class="modal bs-example-modal-sm"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>
                            USER ID <i class="fa fa-lock"></i>
                          </h4>
                        </div>

                        <div class="modal-footer">
                          <a
                            href="javascript:;"
                            class="btn btn-primary btn-block"
                          >
                            USER ID
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </h4>

                <br />
              </div>
              <div className="col-md-4">
                <h4>
                  <button
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target=".bs-example-modal-sm"
                  >
                    LOG OUT
                  </button>

                  <div
                    class="modal bs-example-modal-sm"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  ></div>
                </h4>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="my-4 mx-5">
          <h1>PATIENT DETAILS</h1>
          <p>
            Patient identification is the process of “correctly matching a
            patient to appropriately intended interventions and communicating
            information about the patient's identity accurately and reliably
            throughout the continuum of care”
          </p>
        </div>
      </div>
    );
  }
}
