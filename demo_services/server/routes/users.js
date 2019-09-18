var express = require('express');
var router = express.Router();
const users = require("../controllers/users");

router.post('/register', users.register)

module.exports = router;