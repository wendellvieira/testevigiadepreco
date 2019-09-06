const MongoClient = require('mongodb').MongoClient;

const connectionUrl = 'mongodb://localhost:27017';

const database = 'vigiadb';

const connectionSettings = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const client = new MongoClient( connectionUrl, connectionSettings );

module.exports = collection => {

    return new Promise( (resolve, reject) => {

        client.connect( err => {
    
            if( !!err  ){
                reject()
                console.log('Erro ao conectar ao servidor!')
                client.close()
                return;
            }
            
            const db = client.db(database)
    
            const mongoCollection = db.collection(collection)
    
            resolve({
                collection: mongoCollection,
                close: () => client.close()
            })
        
        })

    })

};