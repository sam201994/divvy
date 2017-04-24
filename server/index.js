'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const db = require('./db/config.js');
const userCtrl = require('./db/user/userController.js');

require('./middleware')(app, express);

app.listen(port, function() {
  console.log('listening on port ' + port);
});


//routes
app.post('/users/create', userCtrl.create);
app.get('/users/auth', userCtrl.authenticate);
