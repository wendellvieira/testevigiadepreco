const express = require('express')
const App = express()

App.use(express.json())

// Configurações do servidor
const cors = require('cors')
App.use( cors() )

// Registro do modulo de categorias...
const Categorias = require('./modules/categorias')
App.use('/categorias', Categorias)

// Registro do modulo de imagens
const Files = require('./modules/files')
App.use('/file', Files)



App.listen(3000, () => {
    console.log('server is rinning')
})