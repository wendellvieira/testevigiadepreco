const express = require('express')
const router = express.Router()
const db = require('../mongoConnection.js')

router.get('/', async (request, response) => {

    const mongodb = await db('categorias')
   
    const categorias = mongodb.collection

    categorias.find({}).toArray( (err, data) => {
        if( !!err ) {
            response.status(404).json({ message: 'Erro ao fazer consulta' })
            return;
        }
        response.json(data)
    })            

    mongodb.close()
       
})

router.post('/', async ( request, response ) => {

    const mongodb = await db('categorias')
   
    const categorias = mongodb.collection

    categorias.insertOne(request.body, (err, data) => {
        if( !!err ) {
            response.status(404).json({ message: 'Erro ao salvar categoria' })
            return;
        }
        response.json(data.ops[0])
    })        

    mongodb.close()
       
})

router.delete('/:id', async ( request, response ) => {
    
    const mongodb = await db('categorias')
    
    const categorias = mongodb.collection

    const deleteData = {
        id: request.params.id
    }
    
    categorias.deleteOne( deleteData, ( err, r ) => {
        response.json( { status: 'success'} )        
    })

    mongodb.close()
       
})

module.exports = router