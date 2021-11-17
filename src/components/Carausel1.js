import React from 'react'
import Card from './Card'

export default function Carausel1() {
    return (
        <div className="container" my-3>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
           <Card/>
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
        </div>
    )
}
