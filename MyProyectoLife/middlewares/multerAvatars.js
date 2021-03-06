//procesamiento de archivos que se subiran al servidor
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, 'public/images/avatars');
    },
    filename : (req,file,cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const uploadAvatars = multer({storage})

module.exports = uploadAvatars;