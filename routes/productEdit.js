var express = require('express');
var router = express.Router();
let controller = require('../controllers/productEditController');


router.get('/:id', controller.editar);
router.get('/:id', controller.editarProducto);


module.exports = router;