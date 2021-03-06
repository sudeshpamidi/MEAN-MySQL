require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var users = require("./routes/users");

const PORT = 3000;
var app = express();

// enable CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use routes
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Express server is listening on http://localhost://${PORT}`);
});