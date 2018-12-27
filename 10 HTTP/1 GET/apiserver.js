const http = require('http');
const todos = require('./data/todo');

http.createServer((req, res) => {
    if (req.url === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(todos));
    } else if (req.url === '/todos/completed') {
        const completed = todos.filter(todo => todo.completed);

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(completed)); 
    } else if (req.url.match(/\/todos\/\d+/)) {
        const id = parseInt(req.url.replace(/\D+/, ''));
        const todo = todos.find(todo => todo.id === id);

        if (!todo) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found'); 
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify(todo)); 
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found'); 
    }

    
}).listen(8000, () => console.log('Server start'));