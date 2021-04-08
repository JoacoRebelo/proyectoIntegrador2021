var express = require('express');
var router = express.Router();
let controller = require('../controllers/searchResultsController');

router.get('/', controller.results);

module.exports = router;

