const express = require('express')

const router = express.Router()

const db = require('../assets/mongo-connection')


router.get('/', async (request, response) => { 
    const _DB = await db('categorias')

    _DB.collection.find({}).toArray( (err, data) => {
        if( !!err ) {
            response.status(404).json({ message: 'Erro ao fazer consulta' })
            return;
        }
        response.json(data)
    })            

    _DB.close()
       
})

router.post('/', async ( request, response ) => {
    const _DB = await db('categorias')

    _DB.collection.insertOne(request.body, (err, data) => {
        if( !!err ) {
            response.status(404).json({ message: 'Erro ao salvar categoria' })
            return;
        }
        response.json(data.ops[0])
    })        

    _DB.close()
       
})

router.delete('/:id', async ( request, response ) => { 
    const _DB = await db('categorias')

    _DB.collection.deleteOne( { id: request.params.id  }, ( err, r ) => {
        response.json( { status: 'success'} )        
    })

   _DB.close()
       
})

router.put('/', async ( request, response ) => {
    const _DB = await db('categorias')

    _DB.collection.updateOne({ id: request.body.id }, { $set: request.body }, (err, data) => {
        if( !!err ) {
            response.status(404).json({ message: 'Erro ao salvar categoria' })
            return;
        }
        if( data.modifiedCount == 1 ){
            response.sendStatus(200)
        }
    })        

    _DB.close()
       
})

module.exports = router