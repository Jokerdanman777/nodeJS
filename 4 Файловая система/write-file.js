const fs = require('fs');
const path = require('path');

function getValue(flag) {
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index+1] : null;
}

const filename = getValue('-f');
const content = getValue('-c');

// fs.writeFile(path.join(__dirname,'note.txt'), 'Hi, motherfucker', error => {
//     if (error) throw error;
//     console.log('File created');
// })

fs.appendFile(filename, content, error => {
    if (error) throw error;
    console.log('File saved');
});