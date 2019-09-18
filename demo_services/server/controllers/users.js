var userService = require('../services/userservice');
var UserController = {};

// POST: http://localhost:3000/users/register/
UserController.register = (req, res) => {
    userService.register({
            username: req.body.userName,
            email: req.body.email,
            isadmin: req.body.isAdmin
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

module.exports = UserController;