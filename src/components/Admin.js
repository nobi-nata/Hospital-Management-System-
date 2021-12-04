import React from 'react'
import { Link } from 'react-router-dom'
export default function Admin() {
    return (
        <div>
<div className="d-grid gap-2 col-6 mx-auto">
&nbsp;&nbsp;&nbsp;&nbsp;
<br/>
  <button className="btn btn-outline-secondary " type="button" value="Recuruitment"><Link to="Recup">Recuruitment</Link></button>
  <button className="btn btn-outline-secondary" type="button"value="Appointment"><Link to="Reqapp">Appointment</Link></button>
</div>
       </div>
    )
}

// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongodb = require('mongodb');

// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, 'public')));

// app.post('/post-feedback', function (req, res) {
//     dbConn.then(function(db) {
//         delete req.body._id; // for safety reasons
//         db.collection('feedbacks').insertOne(req.body);
//     });    
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.get('/view-feedbacks',  function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     });
// });

// app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
