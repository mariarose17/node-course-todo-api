

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     //console.log(JSON.stringify(docs,undefined,2));
    //     console.log(`todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    // db.collection('Todos').insertOne({ text: 'something to do', completed: false },
    //     (err, result) => {
    //         if (err) {
    //             return console.log('Unable to insert todo', err);
    //         }
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     });


    db.collection('Users').find({name:'Maria'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
       
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    client.close();
});