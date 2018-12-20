// console.log(process.execPath);
// console.log(process.version);
// console.log(process.platform);
// console.log(process.argv);

// const msg = process.argv[2];
// console.log(msg);

function getValue(flag){
    const index = process.argv.indexOf(flag);
    return (index > -1) ? process.argv[index + 1] : null
}
const msg = getValue('--msg') || 'Hello';
const name = getValue('--name') || 'friend';

console.log(`${msg}, ${name}`)
