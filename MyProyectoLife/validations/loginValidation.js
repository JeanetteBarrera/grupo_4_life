/*const {check} = require('express-validator'); // Requiero CHECK de express validator*/
const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models')

module.exports = [
    check('email') // Chequeo email
      .isEmail() // Chequeo que sea valido
      .withMessage('You must enter a valid email'),

    body('email')
    .custom(function(value){
      return db.User.findOne({
          where:{
              email:value,
              status:1
          }
      })
      .then(user => {
          if(!user){
              return Promise.reject("Email not registered")
          }

      })
    }),
    body('password') // Cheque password
    .custom(function(value,{req}){
        
      return db.User.findOne({
          where:{
              email:req.body.email,
              status:1
          }
      })
      .then(user => {
          if(!bcrypt.compareSync(value, user.dataValues.password)){
              return Promise.reject()
          }
      })
      .catch(() => {
          return Promise.reject("The password entered is incorrect")
      })
    })
]
    
