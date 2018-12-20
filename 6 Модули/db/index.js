const db = require('./db');
const User = require('./user');

module.exports = {
    get: db.getUsers,
    add: db.addUser,
    User
}