var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(200);
      models.messages.get(function(data) {
        res.end(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req body', req.body);
      // models.messages.post(req.body, function() {
      //   res.writeHead(201);
      //   res.end('');
      // });
      res.end('');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.writeHead(201);
      models.users.get(function(data) {
        res.end(data);
      });
    },
    post: function (req, res) {
      res.writeHead(201);
      models.users.post(req.body, function() {
        res.end('');
      });
    }
  }
};

