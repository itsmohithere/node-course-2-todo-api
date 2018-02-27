const {MongoClient, ObjectID} = require('mongodb'); 
const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log("Error in Connection");
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('ToDos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('ToDos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').deleteMany({name:"Rohit"}).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a93f497fa989906bbcac9ba')}).then((result) => {
        console.log(result);
    })
    client.close();
});
