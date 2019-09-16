//TODO: Imorting all of the modules for the routes and the server

import express from 'express'
import path from 'path'
import ejs from 'ejs'
import session from 'express-session'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
import SequelizeStore from 'connect-session-sequelize';'session.Store'
//TODO: THE DATABASE NEED TO BE IMPORTED RIGHT HERE ( SO WE CAN CONNECT THE SEQUELIZE SESSION TO THE DB ON AMAZON, not sure how to connect the taskmasterDB)
import crypto from 'crypto'
import AWS from 'aws-sdk'
//! body-parser extract the entire body portion of an incoming request and exposes it on req.body aka middleware
// these are the global variables 

const jsonParser = bodyParser.json()
const app = express ()

//************ Amazon AWS ****************** 
//TODO need to set up the connection to the DB here 
const s3 = new AWS.S3({
    //accessKeyId:
    //secretAccessKey:
})
//******************************************** */


//TODO: CONNECT THE SEQUELIZE SESSESSION TO THE AWS DATABASE TASKMASTER DB here

//TODO: SET THE STORE TO mystore where we connect the DB details  here


//****************** SETTING UP THE MIDDLEWARE AND EJS/STATIC****************************** */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,"/src/")));













//todo server port
app.listen(process.env.PORT || 3000, function () {
    console.log("Server running on port 3000");
  });
