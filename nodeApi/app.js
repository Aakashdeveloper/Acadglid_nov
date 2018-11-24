const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 2900;
const mongourl = "mongodb://localhost:27017";
const collection_name = 'books';

/*app.get('/movies', (req,res) => {
    db.collection(collection_name).find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})*/

app.get('/movies',(req,res) => {
    let query = {}
    if(req.query.rate){
        query.rate = req.query.rate
        query = {'rate': parseFloat(query.rate)}
    }else{
        query = req.query
    }
    console.log(query);
    db.collection(collection_name).find(query).toArray((err, result) => {
        if(err) throw err;
        res.json(result)
    })
})

app.post('/addMovies', (req,res) => {
    let myObj = {'name':'google', 'type':'tech'}
    db.collection(collection_name).insert(myObj, (err,result) => {
        if(err) throw err;
        res.send("data added")
    })
})

app.delete('/deleteMovies', (req,res) => {
    let myObj = {'name':'google'}
    db.collection(collection_name).findOneAndDelete(myObj, (err, result) => {
        if(err) throw err;
        res.send("data deleted")
    })
})

app.put('/updateMovies', (req,res) => {
    db.collection(collection_name).update({name:"google"}, {$set: {
        type:"search engine"
    }}, (err, result) => {
        if(err) throw err;
        res.send("data updated")
    })
})

app.get('/',(req, res) => {
    res.send("Welcome to node Api")
})

MongoClient.connect(mongourl, (err,client) => {
    if(err) throw err;
    db = client.db('acadgild_aug')
    app.listen(port, () => {
        console.log("application running on port "+ port)
    })
})