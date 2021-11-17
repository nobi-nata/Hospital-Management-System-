import React from 'react'

export default function Carausel() {
    return (
        <div className="container" my-3>
          <br/>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active rounded-sm">
                <img src="http://bestdentalclinicinbangalore.com/wp-content/uploads/2012/07/Dental-Clinic-in-Bangalore-Quintessence-Dental-Solutions.jpg" className="d-block w-100" style={{height:'600px'}} alt="..."/>
              </div>
              <div className="carousel-item rounded-sm">
                <img src="https://www.ghurkitrust.org.pk/wp-content/uploads/2018/06/physiotherapy.jpg" className="d-block w-100" style={{height:'600px'}} alt="..."/>
              </div>
              <div className="carousel-item rounded-sm">
                <img src="https://www.healthcareitnews.com/sites/hitn/files/052119%20University%20Operating%20Room%20712.jpg" className="d-block w-100" style={{height:'600px'}} alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              {/* <span className="visually-hidden">Previous</span> */}
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              {/* <span className="visually-hidden">Next</span> */}
            </button>
          </div>
          <br/>
        </div>
    )
}

