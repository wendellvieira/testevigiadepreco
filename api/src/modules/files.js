const express = require('express')
const router = express.Router()

const fileOptions = {
    root: `${__dirname}/../../public/`
}

router.get('/:file', async (request, response) => {

    const file = request.params.file

    response.sendFile( file, fileOptions )

})

module.exports = router

