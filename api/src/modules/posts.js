const express = require('express')
const router = express.Router()
const db = require('../assets/mongo-connection')

router.post('/', async (request, response) => {
    const _DB = await db('posts')

    _DB.collection.insertOne(request.body, (err, data) => {
        if( !!err ) {
            response.status(550).json({ message: 'Erro ao salvar categoria' })
            return;
        }
        response.json(data.ops[0])
    })        

    _DB.close()
})

router.get('/', async (request, response) => {
    const _DB = await db('posts')

    _DB.collection.find({}).toArray( (err, data) => {
        if( !!err ) {
            response.status(550).json({ message: 'Erro ao fazer consulta!' })
            return;
        }

        response.json( 
            data.map( item => {
                delete item.categories
                item.description = item.description.replace(/(<([^>]+)>)|(\&([^>]+)\;)/ig,"").substring(0, 200)
                return item
            }) 
        )
    })

    _DB.close()
})

router.get('/find/:id', async (request, response) => {
    const _DB = await db('posts')

    _DB.collection.find({ id: request.params.id }).toArray( (err, data) => {
        if( !!err ) {
            response.status(550).json({ message: 'Erro ao fazer consulta!' })
            return;
        }
        if( data.length == 0 ){
            response.status(404).json({ message: 'Post não encontrato!' })
            return;
        }
        response.json(data[0])
    })

    _DB.close()
})

router.post('/filter/:qnt/:page', async (request, response) => {
    const   
        _DB = await db('posts'),
        skip = parseInt(request.params.page)*parseInt(request.params.qnt),
        findData = {};

        if( request.body.search != '' ){
            const search = new RegExp(request.body.search, 'gi')
            findData.title = { $regex: search }
            findData.description = { $regex: search }
        }

        if( request.body.sCats.length > 0 ){
            findData.categories = {
                $all: request.body.sCats
            }
        }

        _DB.collection
            .find(findData)
            .skip( skip )
            .limit( parseInt(request.params.qnt) )
            .toArray( ( err, data ) => {
                if( !!err ){
                    response.status(404).json({ message: 'Não foi possível salvar!' })
                    return;
                }

                response.json(data)
            })
  

    _DB.close()
})


router.put('/',  async (request, response) => {
    const _DB = await db('posts')

    const id = request.body.id
    delete request.body._id
    _DB.collection.updateOne({ id: id }, { $set: request.body }, (err, data) => {
        if( !!err ){
            response.status(404).json({ message: 'Não foi possível salvar!' })
            return;
        }
        if( data.modifiedCount == 1 ){
            response.sendStatus(200)
        }
    })

    _DB.close()
})

router.delete('/:id', async ( request, response ) => { 
    const _DB = await db('posts')

    _DB.collection.deleteOne( { id: request.params.id  }, ( err, r ) => {
        response.json( { status: 'success'} )        
    })

   _DB.close()
       
})

module.exports = router 