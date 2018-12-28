const express = require('express');
const todos = require('./data/todos');
const morgan = require('morgan');

const port = 8000;
const host = 'localhost';

const app = express();

app.set('view engine', "pug");
// middleware
// function log(req, res, next){
//     let date = new Date(Date.now());

//     console.log(`${date} - ${req.method} - ${req.url}`);
//     next();
// };
// app.use('/log', log);

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Todo!',
        todos
    });
});

app.get('/todos', (req, res) => {
    if(req.query.completed) {
        return res.json(todos.filter(todo => todo.completed.toString() === req.query.completed));
    }
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    let todo = todos.find(todo => todo.id == req.params.id);

    if(!todo) return res.status(404).send('Не найдено');
    res.json(todo);
});



app.listen(port, () => console.log(`Server start on http://${host}:${port}/`));