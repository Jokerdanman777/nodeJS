const data = require('./users');
const User = require('./user');

const users = data.map(({firstname, lastname}) => new User(firstname, lastname));

function getUsers(){
    return users;
};

function addUser(user){
    users.push(user);
}

module.exports = {
    getUsers,
    addUser
}