const waitTimeout = 3000;
const waitInterval = 100;
let currentTime = 0;
let percent = 0;

process.stdout.write('Загрузка...');
setInterval(()=> {
    currentTime += waitInterval;
    percent = Math.floor(currentTime/waitTimeout * 100);
    print(percent);
}, waitInterval);

setTimeout(()=>{
    print(100);
    process.stdout.write('\nГотово');
    process.exit();
}, waitTimeout);

function print(percent) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Загрузка...${percent}%`);
}