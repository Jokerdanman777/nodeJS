const getGreet = require('./greet');

const greet = getGreet('Привет');
const msg = greet( 'Олег');

console.log(msg);