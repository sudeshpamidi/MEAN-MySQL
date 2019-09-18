var userController = {};

userService = require("../services/userService")
var dbQuery = require('./../inc/db_queries');
var dbConn = require("./../inc/db_connection");

userController.postUserLogin = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    if (username == null || username == '' || password == null || password == '') {
        res.json({
            "success": false,
            "message": "Bad input"
        })
    } else {
        //dbConn.getDbConnection(userService.postUserLogin, req, res);
        userService.postUserLogin(req, res);
    };
}

module.exports = userController;