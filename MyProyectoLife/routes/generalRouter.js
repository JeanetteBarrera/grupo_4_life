var express = require('express');
var router = express.Router();

var generalController = require("../controllers/generalController");

/* GET home page. */
router.get('/', generalController.index); /*Home page*/


router.get('/equipo', generalController.equipo);

router.get('/life', generalController.life);


module.exports = router;
