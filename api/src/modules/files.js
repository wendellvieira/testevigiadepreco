const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()


const baseDirs =  `${__dirname}/../../public/`
const drives = {
    upload: {
        path: baseDirs + 'uploads/',
        upload: true
    },
    static: {
        path: baseDirs + 'statics/',
        upload: false
    }
}

for( let drive in drives ){

    // Rota para upload
    if(drives[drive].upload){
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb( null, drives[drive].path )
            },
            filename: function (req, file, cb) {
                cb(null, `${file.fieldname.toUpperCase()}_${Date.now()}${path.extname(file.originalname)}`);
            }
        });

        let upload = multer({ storage })

        router.post(`/${drive}`, upload.single('file'), async (request, response) => {   
            response.send(`${drive}/${request.file.filename}`)        
        })
    }

    // Rota de acesso
    router.get(`/${drive}/:file`, async (request, response) => {
        let file = request.params.file    
        response.sendFile( file, {
            root: drives[drive].path
        })    
    })
}

module.exports = router

