const db = require('./db');
const userQueries = require('../Database.Queries/UserQueries');

const User = function(user){
    this.username = user.username;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.hashedpassword = user.hashedpassword;
    this.mobile = user.mobile;
};

User.register = async (newUser) => {
    try{
        let query = userQueries.createUserQuery();
        let result = await db.Client.query(query, [newUser.username, newUser.firstname, newUser.lastname, newUser.email, newUser.mobile, newUser.hashedpassword]);
        delete result.hashedpassword;
        return result;
    }
    catch(error){
        console.log('error creating user.', error);
    }
};