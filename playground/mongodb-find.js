// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err,client)=> {
    if (err) {  
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    const db = client.db("TodoApp");
    // db.collection('ToDos').find({_id: new ObjectID('5a93f9a3c5210a588623bc64')}).toArray().then((docs) => {
    //     console.log('ToDos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => { 
    //     console.log("Unable to fetch todos",err);
    // });
    
    // db.collection('ToDos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // },(err) => { 
    //     console.log("Unable to fetch todos",err);
    // });
    db.collection('Users').find({name:'Rohit'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch");
    });
     client.close();
});