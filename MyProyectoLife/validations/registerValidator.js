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
    check('name').isLength({min:2}).withMessage('Enter a name'),
    
    check('surname').isLength({min:2}).withMessage('Enter a surname'),
    
    check("email").isEmail().withMessage('Enter your E-mail'),
        
        body('email').custom(value => {
            return db.User.findOne({
                where : {
                    email : value,
                    status: 1
                }
            })
            .then(user => {
                if(user){
                    return Promise.reject('The email is already registered')
                }
            })
            
        }),

    check('password').isLength({min:8}).withMessage('A minimum of 8 characters must be entered'),
    
    body('confirmarPassword').custom((value, {req}) => {
        if(value !== req.body.password){
            return false
        }else{
            return true
        }
    }).withMessage('Passwords do not match')
]