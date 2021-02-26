var express = require('express');
var router = express.Router();

const { login, create, processCreate} = require("../controllers/usersController")

/* middlewares */
const registerValidator = require('../validations/registerValidator');
const uploadAvatars = require('../middlewares/multerAvatars');



/* registro de usuario*/
router.get('/create', create);
router.post('/create',registerValidator, processCreate);


/* login de usuario*/
router.get('/login', login); 


module.exports = router;
