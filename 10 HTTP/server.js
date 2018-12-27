const http = require('http');

const html = `    
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Node.js lesson</title>
            <link rel="stylesheet" type="text/css" href="app.css">
        </head>
        <body>
            <div class = 'flexConteiner'>
                <h1 class = 'child'>I am finished</h1>
                <button>Dont press it</button>
                <script src="app.js"></script>
            </div>
        </body>
    </html>
`;

const css = `
    .flexConteiner {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
    }
`;

const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('There Will Be Blood'))
`;
http.createServer((req, res) => {
    console.log(req.url)
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type':'text/html' })
            res.end(html);
        break;

        case  '/app.css' : 
            res.writeHead(200, { 'Content-Type':'text/css' })
            res.end(css);
        break;

        case  '/app.js' : 
            res.writeHead(200, { 'Content-Type':'text/javascript' })
            res.end(js);
        break;

        default : 
            res.writeHead(404, { 'Content-Type':'text/plain' })
            res.end('Not found, idi nahoy blyat');
    }

}).listen(8000, 'localhost', ()=> console.log('Server start'));

