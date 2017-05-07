/* modules */
const jwt = require('jsonwebtoken');

/* files */
const User = require('./userModel.js');
const dbconfig = require('../dbconfig.js');

const controller = {

  signin: function(req, res) {

    const username = req.query.username;
    const password = req.query.password;

    User.findOne({ username: username })
    .exec(function(err, user) {
      if(user && User.validatePW(password, user.password)) {
        const token = jwt.sign(user, dbconfig.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        return res.json({
          success: true,
          token: token
        });
      }
      return res.json({
        success: false,
        error: "Imvalid e-mail or password"
      });
    });
  },

  create: function(req, res, next) {

    const password = User.generateHash(req.body.password);
    const username = req.body.username;
 	  const name = req.body.name;

    User.findOne({ username: username })
	  .exec(function(err, user) {
    	if(err) {
    		console.log("error");
    	}
    	if(!user) {
      	let newUser = new User({
          	username: username,
          	name: name,
          	password: password
      	});
      	newUser.save(function(err, user) {
      		if (err) {
      		  res.status(500).send(err);
      		} else {
            const token = jwt.sign(user, dbconfig.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            return res.json({
              success: true,
              token: token,
              message: 'Token assigned'
             });   
          }        	
   	    });
      } else {
        return res.json({
          success: false,
          error: "Account already exist"
        })
      }
    });
  },

  getfriends: function(req, res) {

    const myUserName = req.query.myUserName;
    User.find({}, function(err, users) {  
      let userData = {}
      users.forEach(function(user) {
        if(user.username !== myUserName) {
          userData[user.username] = {
            username: user.username,
            name: user.name,
            id: user._id, 
            score: 0,
            bills: []
          }
        }
      });
      return res.json({friends: userData});  
    })
  },

  authenticate: function(req, res) {
      
    let token = req.headers.token;
    jwt.verify(token, dbconfig.secret, function(err, payload) {
      if (err) {
        res.status(403).send('Invalid authentication token');
      } else {
        res.status(200).send({});
      }
    });
  }
};

module.exports = controller;
