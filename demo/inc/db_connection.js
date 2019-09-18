var mysql = require('promise-mysql');
var config = require('./config.json');

var getDbConnection = function(callback, req, res) {
    console.log('before connection..' + `${process.env.DB_HOST}`)

    mysql.createConnection({
        connectionLimit: config.connectionLimit,
        host: `${process.env.DB_HOST}`, //config.host,
        user: `${process.env.DB_USER}`, //config.user,
        password: `${process.env.DB_PASS}`, //config.password,
        database: `${process.env.DB_NAME}`, // config.db,
        debug: config.debug
    }).then(function(conn) {
        callback(conn, req, res);
    }).catch(function(error) {
        console.log('Error establishing DB connection!');
        console.log(error);
        res.json({ 'success': false });
    });
};

var closeDbConnection = function(con) {
    console.log('DB Connection closed!');
    con.end();
};

module.exports = { getDbConnection, closeDbConnection };