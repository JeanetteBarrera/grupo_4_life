var express = require('express');
var router = express.Router();

var usersController = require("../controllers/usersController")
/* GET users listing. */
router.get('/login', usersController.login); /*vista de ingreso*/

router.get("/create", usersController.create); /*vista de registro*/

module.exports = router;
