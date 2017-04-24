//make this file in server/db/

var cfg = {
  myLocalDB: 'mongodb://localhost/myapp',
  secret: "make a secret! just make sure it's a string or buffer or jwt will yell at you"
};

module.exports = cfg;