const express = require('express')
const router = express.Router()

const DirFiles = `${__dirname}/../../public/uploads/`

const fileOptions = {
    root: DirFiles
}


// Configurações para upload
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DirFiles)
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname.toUpperCase()}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage })



router.get('/:file', async (request, response) => {

    const file = request.params.file

    response.sendFile( file, fileOptions )

})

router.post('/', upload.single('file'), async (request, response) => {
   
    response.send(request.file.filename)

})

module.exports = router

