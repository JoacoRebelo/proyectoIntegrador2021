var express = require('express');
var router = express.Router();
let controller = require('../controllers/registerController');

const multer = require('multer');
const path = require('path');

const subirFotoPerfil = multer.diskStorage({
  destination: (req, file, cb) => { //definimos la ruta donde se va a almacenar el archivo
    let rutaDirectorio = 'public/images/users'; //definimos donde queremos que se guarde
    cb(null, rutaDirectorio);
  },
  filename: (req, file, cb) => { //indicaremos el nombre con el que se va a guardar el archivo
    let nombreArchivo = 'usuario' + file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    cb(null, nombreArchivo);
  }
});
const upload = multer({
    storage: subirFotoPerfil
  });

router.get('/', controller.register);
router.post('/',upload.single('url'), controller.registerCreateUser);

module.exports = router;