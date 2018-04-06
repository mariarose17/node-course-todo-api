

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('5ac5c4136df87e16cfb7bb18')
        },
        {
            $set: {
                completed: true
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5ac46d80a7fc0e18903fc1a7')
        },
        {
            $set: {
                name: 'gopu'
            },
            $inc:{
                age:1

            }

        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //client.close();
});