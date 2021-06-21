var express = require('express');
var router = express.Router();
let controller = require('../controllers/profileEditController');

router.get('/:id', controller.edit);
router.post('/', controller.editUsuario)

module.exports = router;