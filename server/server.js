
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
app.use(bodyParser.json());


// var user = new User({ email: 'maria@gmail.com' });
// user.save().then((doc) => {
//     console.log(doc);
// }, (e) => console.log(e));

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });

    }, (e) => {
        res.status(400).send(e);
    });

});

app.get('/todos/:id', (req, res) => {

    var id = req.params.id;
    //res.send(req.params);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {

        if (!todo) {
            res.status(404).send();
        }
        res.send({ todo });

    }).catch((e) => {
        res.status(400).send();
    });
    //res.send(req.params);
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {

        body.completedAt = new Date().getTime();
    }
    else {
        body.completedAt = null;
        body.completed = false;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(3000, () => {
    console.log('Server up on port 3000');
});

module.exports = { app };