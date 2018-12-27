const http = require('http');
const fs = require('fs');
const path = require('path');


function parseBody(body){
    const result = {};
    const keyValuePairs = body.split('&');
    keyValuePairs.forEach(element => {
        const [key, value] = element.split('=');
        result[key] = value;
    });
    return result;
}

function render(template, data, done){
    fs.readFile(path.join(__dirname, 'view', `${template}.view`), 'utf-8', (error, file) => {
        if (error) return done(error);

        let html = file;

        for (let prop in data) {
            const regexp = new Regexp(`{ ${prop}}`, 'g');
            html = html.replace(regexp, data[prop]);
        }
        done(null, html);
    })
}
http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            const stream = fs.createReadStream(path.join(__dirname, '3 view', 'form.view'));
            res.writeHead(200, { 'Content-Type': 'text/html'});
            stream.pipe(res);
            break;

        case 'POST':
            let body = '';
            req.setEncoding('utf-8')
            req.on ('data', data => body += data);
            req.on('end', () => {
                const data = parseBody(body);
                render('post', data, (error, html)=> {
                    if (error) {
                        res.writeHead(500, { 'Content-Type': 'text/plain'})
                        return res.end(error.message);
                    }
                    res.writeHead(200, { 'Content-Type': 'text/html'})
                    res.end(html);
                })
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify(data));
            });
            break;
    }
}).listen(8000, () => console.log('Server start'));