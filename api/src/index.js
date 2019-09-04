// const MongoClient = require('mongodb').MongoClient;

// const connectionUrl = 'mongodb://localhost:27017';

// const database = 'vigiadb';

// const connectionSettings = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }

// const client = new MongoClient( connectionUrl, connectionSettings );

// client.connect( err => {

//     console.log( err, 'Conected successfully to server' );

//     const db = client.db(database);
    
//     client.close();

// });

const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('ola mundo')
})

app.listen(3000)
console.log('server is rinning')