const {check} = require('express-validator');

module.exports = [
    check('email')
    .isEmail().withMessage('El email ingresado es incorrecto'),
    
    check('pass')
    .notEmpty().withMessage('Debe de ingresar una contraseña valida')
]