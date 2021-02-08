var express = require('express');
var router = express.Router();

var generalController = require("../controllers/generalController");

/* GET home page. */
router.get('/', generalController.index); /*Home page*/

module.exports = router;
