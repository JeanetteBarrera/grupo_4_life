const path = require('path'); //requiero path 
const {check, body} = require('express-validator'); //requiero express-validator 
const {getUsers, setUsers} = require(path.join('..','data','users')); 
const users_db = getUsers();

/*validacion de datos de registro de usuario desde el back-end*/
/*check, funcion que nos permite validar un campo*/
/*body, funcion que nos permite una validacion personalizada*/

module.exports = [
    check('name').isLength({min:2}).withMessage('Se debe ingresar un nombre'),
    
    check('surname').isLength({min:2}).withMessage('Se debe ingresar un apellido'),
    
    check("email").isEmail().withMessage('Se debe ingresar un email valido'),
        
        body('email').custom(value => {
            let result = users_db.find(user => user.email === value)
           
            if(result){
                return false
            }else {
                return true
            }
        }).withMessage('El e-mail ingresado ya esta registrado'),

    check('password').isLength({min:8}).withMessage('Se debe ingresar un minimo de 8 caracteres'),
    
    body('confirmarPassword').custom((value, {req}) => {
        if(value !== req.body.password){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden')
]