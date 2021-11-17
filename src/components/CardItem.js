import React from 'react'

export default function CardItem(props) {
    return (
        <div>
            <div className="card" style={{width : 18+'em'}}>
            <img src={props.link} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Read more..</a>
            </div>
            </div>
        </div>
    )
}
