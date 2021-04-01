var express = require('express');
var router = express.Router();
let controller = require('../controllers/profileEditController');

router.get('/', controller.edit);

module.exports = router;