const { get, add, User } = require('./db');

const users = get();
const user = new User('Bruce', 'Wayne');

console.log(users);

add(user);

console.log(users);