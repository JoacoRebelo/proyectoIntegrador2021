var express = require('express');
var router = express.Router();
let controller = require('../controllers/logoutController');

router.get('/', controller.logout);

module.exports = router;