const User = require('../models').User;

var userService = {};

userService.register = (userObj) => {

    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = userService;