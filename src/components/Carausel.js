import React from "react";
import "./Carausel.css";

export default function carausel() {
  return (
    <div>
      <br />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cloudfront.omsphoto.com/wp-content/uploads/2019/10/GHA_XRAY_8198.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cloudfront.omsphoto.com/wp-content/uploads/2019/10/OMS-photo-mlburn-lab-workplace-012-1050x700.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cloudfront.omsphoto.com/wp-content/uploads/2019/10/OMS-photo-health-medical-photography-016-1050x700.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
    </div>
  );
}
