var express = require('express');
var router = express.Router();
let controller = require('../controllers/productController');

router.get('/:id', controller.id);

module.exports = router;