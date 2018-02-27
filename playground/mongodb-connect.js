// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/************************* */ 
// var obj = new ObjectID(); *  //creating objectid by ES6 destructuring
// console.log(obj);         *
/************************* */

/*********************** */
// var user = {name:"Alfons", age: 29}; *
// var {name} = user;                   * //ES6 object destructuring    
// console.log(name);                   *
/*********************** */

const url = "mongodb://localhost:27017/TodoApp";
MongoClient.connect(url, (err,client)=> {
    if (err) {  
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    // const db = client.db('TodoApp');

    // const myobj = {
    //     text: 'Somthing to do',
    //     completed:false  
    //   };
    // db.collection('ToDos').insertOne(myobj, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // const db = client.db("TodoApp");
    // const query = {"name":"Rohit", "age":"26", "location":"Mathura"};

    // db.collection("Users").insertOne(query, (err,result) => {
    //     if (err) {
    //         return console.log("Query not executed"+err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    client.close();
});