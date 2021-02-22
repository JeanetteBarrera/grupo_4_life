var express = require('express');
var router = express.Router();

const { create, processCreate, login, processLogin, logout, profile} = require("../controllers/usersController")

/* middlewares */
/*const userCheck = require('../middlewares/UserCheck');*/

/* validaciones */
const loginValidation = require('../validations/loginValidation');


/* registro de usuario*/
router.get('/create', create);
router.post('/create', processCreate);


/* login de usuario*/
router.get('/login', login);
router.post('/login', loginValidation , processLogin);

/* eliminar un usuario */ 
router.get('/logout',logout); 

/* ingresar un usuario */
router.get('/profile', /*userCheck*/ profile);


module.exports = router;
