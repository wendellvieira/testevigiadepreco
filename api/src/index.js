const express = require('express')
const App = express()

App.use(express.json())

// Configurações do servidor
const cors = require('cors')
App.use( cors() )

const routes = {
    categorias: './modules/categorias',
    file: './modules/files',
    post: './modules/posts'
}

for(let route in routes){
    App.use(`/${route}`, require(routes[route]))
}

App.listen(3000, () => {
    console.log('server is rinning')
})



