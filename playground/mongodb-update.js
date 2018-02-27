const {MongoClient, ObjectID} = require('mongodb');
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Connection Error');
    }
    console.log("Connected");
    const db = client.db('TodoApp');

    // db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('5a950828cb3b12d9a919bb6e')}, {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })
    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5a93eb0a39588203117fffea')}, 
        {$set:{name:'Rohit'},$inc:{age:1}},
        {returnOriginal:false}).then((result) => {
            return console.log(result);
        });
    client.close();
});