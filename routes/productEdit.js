var express = require('express');
var router = express.Router();
let controller = require('../controllers/productEditController');

router.get('/', controller.editar);

module.exports = router;