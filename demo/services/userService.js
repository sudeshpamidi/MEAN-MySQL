var userService = {};

var dbQuery = require('./../inc/db_queries');
var dbConn = require("./../inc/db_connection");

userService.postUserLogin = (req, res) => {
    dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
}

module.exports = userService;