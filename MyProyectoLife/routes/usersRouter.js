var express = require('express');
var router = express.Router();

const { login, create, processCreate} = require("../controllers/usersController")
/* middlewares */




/* registro de usuario*/
router.get('/create', create);
router.post('/create', processCreate);


/* login de usuario*/
router.get('/login', login); 


module.exports = router;
