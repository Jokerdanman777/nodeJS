const mongodb = require('./mongo');

module.exports = connectionString => {
    const connection = mongodb.connect(connectionString);
    return connection;
}