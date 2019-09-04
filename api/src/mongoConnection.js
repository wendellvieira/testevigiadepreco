const MongoClient = require('mongodb').MongoClient;

const connectionUrl = 'mongodb://localhost:27017';

const database = 'vigiadb';

const connectionSettings = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const client = new MongoClient( connectionUrl, connectionSettings );

module.exports = new Promise( (resolve, reject) => {

    client.connect( err => {

        if( !err ){
            reject()
            console.err('Erro ao conectar ao servidor!')
            client.close()
        }
        
        console.log( err, 'Conected successfully to server' )

        resolve({
            db: client.db(database),
            close: client.close
        })
        
    
    });


} )
