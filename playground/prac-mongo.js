//To dropdatabase
/*const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err,client) => {
    if(err){
        return console.log("not connected");
    }
    console.log("connected to server");
    const db = client.db("TodoApp");
    db.dropCollection((err,result) => {
        if(err){
            return console.log("not dropped"+err);
        }
        console.log("Deleted ");
    });
    client.close();
});
*/

// To delete document

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, (err,client) => {
    if (err) {
        return console.log("Not connected"+err);
    }
    console.log("Connected to server");
    const db = client.db("TodoApp");
    //const myquery = {"_id":"ObjectId(5a93db7f2d63d67c51c3147e)"};
    db.toDos.remove({_id:ObjectId("5a93db7f2d63d67c51c3147e")});//(err,result) => {
    //     if (err) {
    //         return console.log("query failed"+err);
    //     }
    // });

    client.close();
});