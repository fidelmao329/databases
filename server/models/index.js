var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('messages get');
      db.makeConnection('GET', 'messages', undefined, callback);
    }, // a function which produces all the messages
    post: function (data, callback) {
      console.log('messages post', data);
      db.makeConnection('POST', 'messages', data, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('users get');
      db.makeConnection('GET', 'users', undefined, callback);
    },
    post: function (data, callback) {
      console.log('users post', data);
      db.makeConnection('POST', 'users', data, callback);
    }
  }
};

