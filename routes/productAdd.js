var express = require('express');
var router = express.Router();
let controller = require('../controllers/productAddController');

router.get('/', controller.add);
router.post('/', controller.productAdd);

module.exports = router;