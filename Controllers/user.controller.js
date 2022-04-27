const User = require('../Models/user.Model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const passwordValidator = require('password-validator');

let passValidator = new passwordValidator();
    passValidator.is().min(8)
    .is().max(32)
    .has().digits(1)
    .has().not().spaces();

exports.register = async (req, res) => {
    try{
        if(!req.body.username || req.body.username.isLength(4, 8)){
            res.status(400).send('Length of username must be between 4 to 8 characters.');
            return;
        }
        if(!req.body.firstname){
            res.status(400).send('First Name cannot be empty.');
            return;
        }
        if(req.body.email && emailValidator.validate(req.body.email)){
            res.status(400).send('Entered email is invalid.');
            return;
        }
        if(!req.body.password){
            res.status(400).send('Password cannot be empty.');
            return;
        }
        if(passValidator.validate(req.body.password)){
            res.status(400).send('Password should contain at least 1 digit, minimum length 8 & no spaces.');
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = bcrypt.hash(req.body.password, salt);
        const user = new User({
            username : req.body.username,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            hashedpassword : hashedPass,
            mobile : req.body.mobile
        });

        let result = await User.register(user);
        if(result){
            res.send(result);
        }
        else{
            res.status(500).send('User registration failed, internal server error.');
            return;
        }
    }
    catch(err)
    {
        res.status(500).send('User registration failed, internal server error.');
    }

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