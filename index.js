//TODO: Imorting all of the modules for the routes and the server

// import express from 'express'
var express = require('express');
var path =  require('path');
var ejs =  require('ejs');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./src/models');
var crypto = require('crypto');
var AWS = require('aws-sdk');
//! body-parser extract the entire body portion of an incoming request and exposes it on req.body aka middleware
// these are the global variables 

const jsonParser = bodyParser.json()
const app = express()

//******************************************** */


var taskStore = new SequelizeStore({
    db: db.sequelize
});
//SETTING THE STORE TO taskStore when we connect to the Database

app.use(session({
    secret: 'tmdbteamr0cks',
    resave: false,
    saveUninitialized: true,
    store: taskStore
}))
taskStore.sync();
// db.sequelize.sync();

//****************** SETTING UP THE MIDDLEWARE AND EJS/STATIC****************************** */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"/src/")));

//TODO: Verify connectivity through express
app.get('/', (req, res) => { res.send('Hello World from express app')})
app.get('/all', (req, res) => { 
    //We still need to get a sample query here
    db.task.findAll();
})
//todo server port
app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000");
  });
  