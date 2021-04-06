const {check, validationResult, body} = require("express-validator");

module.exports= [
    body('category').custom(function(value) {
        if(value=='0'){
            return false
        }else{
            return true
        }
    })
    .withMessage('Debe seleccionar una categoria'),

    body('subcategory').custom(function(value) {
        if(value=='0'){
            return false
        }else{
            return true
        }
    })
    .withMessage('Debe seleccionar una subcategoria'),

    check('name').isLength({min:3}).withMessage('Debe ingresar un nombre de producto'),

    check('description').isLength({min:5,max:450}).withMessage('La descripcion debe tener entre 5-450 caracteres'),

    check('price').isLength({min:2}).withMessage('Debe ingresar el precio del producto'),

    check('discount').isLength({min:1}).withMessage('Debe ingresar un valor de descuento'),

    body('color[]').exists()
    .notEmpty().withMessage("no puede se vacio")
    .isArray()
    /*.custom((value)=>{
         if(value.every.isHexColor()){
            return true
        }else {
            return false
        }
    }).withMessage("se debe ingresar un color en hexadecimal"),*/
    

    /*check('stockS'),
    check('stockM.'),
    check('stockL'),
    check('stockXL')*/

]