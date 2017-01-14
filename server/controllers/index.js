var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('req.url', req.url);
      res.writeHead(200);
      res.end('asdf');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POST - WE FOUND IT');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var data = '';
      res.writeHead(201);
      console.log('req bod', req.body);
      var username = req.body.username;
      models.users.get(username);
      res.end('asdfasdf');
    }
  }
};

