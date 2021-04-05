const path = require('path'); //requiero path 
const {check, body} = require('express-validator'); //requiero express-validator 
/*const {getUsers, setUsers} = require(path.join('..','data','users')); */
/*const users_db = getUsers();*/
/*const {check,validationResult,body} = require('express-validator');*/
const bcrypt = require('bcrypt');
const db = require('../database/models')

/*validacion de datos de registro de usuario desde el back-end*/
/*check, funcion que nos permite validar un campo*/
/*body, funcion que nos permite una validacion personalizada*/

module.exports = [
    check('name').isLength({min:2}).withMessage('Ingrese un nombre'),
    
    check('surname').isLength({min:2}).withMessage('Ingrese un apellido'),
    
    check("email").isEmail().withMessage('Ingrese una direccion de correo electronico'),
        
        body('email').custom(value => {
            return db.User.findOne({
                where : {
                    email : value
                }
            })
            .then(user => {
                if(user){
                    return Promise.reject('El correo electronico ingresado ya esta registrado')
                }
            })
            
        }),

    check('password').isLength({min:8}).withMessage('Se debe ingresar un minimo de 8 caracteres'),
    
    body('confirmarPassword').custom((value, {req}) => {
        if(value !== req.body.password){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden')
]