var express = require('express');
var router = express.Router();
let controller = require('../controllers/productEditController');

const multer = require('multer');
const path = require('path'); //nos permite trabajar con archivos del sistema operativo

const subirFoto = multer.diskStorage({ //.diskStorage define deonde y con que nombre se van a asubir los archivos
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
    storage: subirFoto //almacena todo lo hecho
  });

router.get('/:id', controller.editar);
router.post('/',upload.single('url'), controller.postearEdit); //lo que hace esto es subir el archivo que el usuario indicó antes de ejecutar el controlador.

module.exports = router;