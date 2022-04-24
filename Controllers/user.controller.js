// const 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    //register user using db model
};

exports.login = async(req, res) => {
    //login
};

exports.logout = async(req, res) => {
    //logout logic
};

exports.authMiddleware = async(req, res, next) => {
    // if authorized
    next();
}