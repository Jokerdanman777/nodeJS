const http = require('http');

function format(date){
    return (date < 10 ? '0' : '') + date;
}
function now(){
    const date = new Date;

    return date.getFullYear() + '-' + 
    format(date.getMonth() + 1) + '-' + 
    format(date.getDate()) + '-' + 
    format(date.getHours()) + '-' + 
    format(date.getMinutes()) + '-' + 
    format(date.getSeconds());
}
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(now());
}).listen(8000);