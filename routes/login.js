var express = require('express');
var router = express.Router();
let controller = require('../controllers/loginController');

router.get('/', controller.login);
router.post('/', controller.loginValidate);

module.exports = router;
