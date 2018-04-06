

const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    const db = client.db('TodoApp');
    


    // db.collection('Todos').deleteMany({text:'hi'}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text:'hi'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({text:'hi'}).then((result)=>{
        console.log(result);
    });
    //client.close();
});