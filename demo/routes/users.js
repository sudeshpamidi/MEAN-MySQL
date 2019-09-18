const express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController');

var dbQuery = require('./../inc/db_queries');
var dbConn = require("./../inc/db_connection");

userRouter.post('/login', userController.postUserLogin)
    .get('/', (req, res, next) => {
        dbConn.getDbConnection(dbQuery.getAllusers, req, res);
    })
    .put('/', (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        if (username == null || username == '' || password == null || password == '') {
            res.json({
                "success": false,
                "message": "Bad input"
            })
        } else {
            dbConn.getDbConnection(dbQuery.putUserUpdate, req, res);
        };
    })
    .delete('/:userid', (req, res, next) => {
        var userid = req.params.userid;
        if (userid == null || userid == '') {
            res.json({
                "success": false,
                "message": "Bad input"
            })
        } else {
            dbConn.getDbConnection(dbQuery.deleteUser, req, res);
        };
    })
    .post('/register', (req, res, next) => {
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;

        if (username == null || username == '' || password == null || password == '' || email == null || email == '') {
            res.json({
                "success": false,
                "message": "Bad input"
            })
        } else {
            dbConn.getDbConnection(dbQuery.postUserRegister, req, res);
        };
    })
    .put('/:userid', (req, res, next) => {
        var userid = req.params.userid;
        var updatetype = req.body.updatetype;
        var updatevalue = req.body.updatevalue;

        if (userid == null || userid == '' || updatetype == null || updatetype == '' || updatevalue == null || updatevalue == '') {
            res.json({
                "success": false,
                "message": "Bad input"
            })
        } else {
            dbConn.getDbConnection(dbQuery.setUserUpdate, req, res);
        };
    })
    .get('/:userid', (req, res, next) => {
        var userid = req.params.userid;

        if (userid == null || userid == '') {
            res.json({
                "success": false,
                "message": "Bad input"
            })
        } else {
            dbConn.getDbConnection(dbQuery.getUserById, req, res);
        };
    });

module.exports = userRouter;