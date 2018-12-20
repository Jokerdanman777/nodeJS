const fs = require('fs');

console.log("Reading directory");
fs.readdir(__dirname, (error, contents) => {
    if (error) throw error;
    console.log(contents);
})
console.log("Finished reading");