const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27071/";
const PORT = 9090;
const app = express();

app.get("/fetch",(req,res)=>{
    MongoClient.connect(URL, (err, db) => {
    if (err) throw err;
    var dbo = db.db('quickheal');
    dbo.collection('user').find({}, {projection: { "password": 0, "email": 0 }}).toArray((err, result) => {
        console.log(result);
        })
    });
})
app.listen(PORT,()=>{
    console.log("Running on port 9090");
})
