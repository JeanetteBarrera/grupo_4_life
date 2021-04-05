/*const {check} = require('express-validator'); // Requiero CHECK de express validator*/
const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models')

module.exports = [
    check('email') // Chequeo email
      .isEmail() // Chequeo que sea valido
      .withMessage('Se requiere un email valido'),

    check('password') // Cheque password
      .notEmpty() // Chequeo que no hayan campos vacios*/
      /*.isLength({min:1})*/
      .withMessage('La constraseña es requerida'),

    
]