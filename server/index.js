'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./db/config.js');
const userCtrl = require('./db/user/userController.js');
const billCtrl = require('./db/bill/billController.js');

require('./middleware')(app, express);

app.listen(port, function() {
  console.log('listening on port ' + port);
});


/************ ROUTES ***********/

//sign up new user
app.post('/users/create', userCtrl.create);

//to check for authentication (there is still a glitch)
app.get('/users/auth', userCtrl.authenticate);

//sign in an existing user
app.get('/users/signin', userCtrl.signin)

//to retrive all users in database ( adding friends and accting request feature not added)
app.get('/getfriends', userCtrl.getfriends)

//creating a new bill - any user can create a bill;
app.post('/createBill', billCtrl.createBill)

//retrive all bills
app.get('/getBills', billCtrl.getBills)
