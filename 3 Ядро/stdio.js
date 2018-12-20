const stdin = process.stdin;
const stdout = process.stdout;

// stdout.write('nodeJS \n');
// stdout.write('nodeJS');

stdout.write('What is your name, buddy? \n');
stdin.on('data', input => {
    const name = input.toString().trim();
    const prevesedName = name.split('').reverse().join('');
    stdout.write(`\n${prevesedName} - thats your reversed name, azazazazazaz`);
    console.log(name);
    process.exit();
});

process.on('exit', () => stdout.write('\n\nGoodluck with Node.js'));