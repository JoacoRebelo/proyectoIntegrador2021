var express = require('express');
var router = express.Router();
let controller = require('../controllers/productEditController');

const multer = require('multer');
const path = require('path');

const subirFoto = multer.diskStorage({
  destination: (req, file, cb) => { //definimos la ruta donde se va a almacenar el archivo
    let rutaDirectorio = 'public/images/products'; 
    cb(null, rutaDirectorio);
  },
  filename: (req, file, cb) => { //indicaremos el nombre con el que se va a guardar el archivo
    let nombreArchivo = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  }
});
const upload = multer({
    storage: subirFoto
  });

router.get('/:id', controller.editar);
router.post('/',upload.single('url'), controller.postearEdit);

module.exports = router;