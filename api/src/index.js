const express = require('express')
const App = express()

// Registro do modulo de categorias...
const Categorias = require('./modules/categorias')
App.use('/categorias', Categorias)



App.listen(3000, () => {
    console.log('server is rinning')
})