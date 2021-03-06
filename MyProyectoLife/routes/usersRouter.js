var express = require('express');
var router = express.Router();

const { login, create, processCreate, processLogin, logout, profile , profileEdit, profileUpdate, profileDelete, profileAdmin } = require("../controllers/usersController")

/* middlewares */
const registerValidator = require('../validations/registerValidator');
const uploadAvatars = require('../middlewares/multerAvatars');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
/* validaciones */
const loginValidation = require('../validations/loginValidation');


/* registro de usuario*/
router.get('/create', create);
router.post('/create',registerValidator, processCreate);


/* login de usuario*/
router.get('/login', login);
router.post('/login', loginValidation , processLogin);

/* eliminar un usuario */ 
router.get('/logout',logout); 

/* ingresar un usuario */
router.get('/profile',userCheck, profile);

/* editar y eliminar usuario, todavia esta en proceso*/
/*router.get('/profile/edit/:id',profileEdit);*/
router.put('/profile/update/:id',uploadAvatars.any(), profileUpdate);

router.delete('/profile/delete/:id',profileDelete);

/*usuario administrador*/
router.get('/admin/profile',adminCheck,profileAdmin);

module.exports = router;
 
