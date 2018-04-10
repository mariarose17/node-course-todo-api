const { ObjectID } = require('mongodb');


const { Mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5acc651256a0f827d691f5a1').then((result) => {
    console.log(result);
});