/* other modules */
const jwt = require('jsonwebtoken');

/* other files */
const User = require('./userModel.js');
const dbconfig = require('../dbconfig.js');

const controller = {

  signin: function(req, res) {
    console.log("-----------------");
    const username = req.query.username;
    const password = req.query.password;
    console.log("in sign in controller: res");
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
      return res.status(403).send('Invalid e-mail or password');
    });
  },



  create: function(req, res, next) {
    const password = User.generateHash(req.body.password);
    const username = req.body.username;
 	  const name = req.body.name;

	  const q=User.findOne({ username: username });
	  q.exec(function(err, user) {
    	if(err) {
    		console.log("error");
    	}
    	if (!user) {
      	let newUser = new User({
          	username: username,
          	name: name,
          	password: password
      	});
      	newUser.save(function(err, user) {
      		if (err) {
      		  	res.status(500).send(err);
      		}else {

            const token = jwt.sign(user, dbconfig.secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            console.log("here is my token::::::", token);
            return res.json({
              success: true,
              token: token,
              message: 'Enjoy your Toeken'
             });   
          }        	
   	    });
      } else {
        console.log('Account already exists');
        res.redirect('/auth');
      }
    });

  },

  authenticate: function(req, res) {
    
    console.log("req: ", req.headers);    
    let token = req.headers.token;
    console.log("INSIDE AUTHENTICATE",token);
    jwt.verify(token, dbconfig.secret, function(err, payload) {
      if (err) {
        console.log("inside invalid authentication");
        res.status(403).send('Invalid authentication token');
      } else {
        console.log("inside valid authentication");
        res.status(200).send({});
      }
    });
  }
};
module.exports = controller;
