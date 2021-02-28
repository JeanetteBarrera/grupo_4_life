const {check} = require('express-validator'); // Requiero CHECK de express validator

module.exports = [
    check('email') // Chequeo email
    .isEmail() // Chequeo que sea valido
    .withMessage('Se requiere un email valido'),

    check('password') // Cheque password
    .notEmpty() // Chequeo que no hayan campos vacios
    .withMessage('La constraseña es requerida'),
]