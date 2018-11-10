// New version
import express from 'express';

let app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.listen(2300, (err) => {
    console.log("server running on port 2300")
})



/*
Es5(ECMASCRIPT)
function add(a,b){
    return a+b
}

Es6(ECMASCRIPT)
let add = (a,b) => {
    return a+b
}

import

// Old version
let express = require('express');

let app = express();

app.get('/', function(req,res){
    res.send("<h1>Say hello to express</h1>")
})

app.get('/about', function(req,res){
    res.send("<h1>Say about to express 1</h1>")
})

app.listen(2300, function(err){
    console.log("server running on port 2300")
})

*/
