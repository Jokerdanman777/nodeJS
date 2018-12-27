const http = require('http');
const { public, home, search, notFound } = require('./routes');

const render = require('./lib/render');
const port = 8000;
const host = 'localhost';

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
    if(req.url.match(/\.(html|css|js|png)$/)) {
       public(req, res);
    }  else if (req.url === '/') {
        home(req, res);
    } else if (req.url.startsWith('/search')) {
        search(req, res);
    } else {
        notFound(req, res);
    }
}).listen(port, host, () => console.log(`Server start on http://${host}:${port}/`));