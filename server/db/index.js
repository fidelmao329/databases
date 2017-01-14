var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


exports.makeConnection = function(queryType, tableName, data, callback) {
  dbConnection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'chat'
  });
  var queryString = {
    POST: 'INSERT INTO ' + tableName + ' SET ?',
    GET: 'SELECT * FROM ' + tableName, // may need to update * to handle requests
  };
  dbConnection.connect();
  dbConnection.query(queryString[queryType], data, function(err, response, body) {
    if (err) {
      throw err;
    } else {
      console.log('Success!', response.insertId);
      var data = JSON.stringify(response);
      callback(data);
    }
  });
};