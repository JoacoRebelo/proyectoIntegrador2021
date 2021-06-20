var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController');

router.get('/:id', controller.product);
router.post('/:id', controller.comentarios);
router.post('/', controller.borrar)

module.exports = router;