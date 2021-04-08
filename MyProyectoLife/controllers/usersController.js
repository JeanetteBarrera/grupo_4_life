const db = require('../database/models')
const path= require("path");
const bcrypt = require('bcrypt');
/*const {getUsers, setUsers} = require(path.join('..','data','users'));*/
const {check,validationResult,body} = require('express-validator');
/*const users_db = getUsers();*/
const { Op } = require("sequelize");
/*const { validationResult} = require('express-validator');*/

module.exports = {
    create : (req, res) => { /*vista de registrarse para nuevos usuarios*/
        res.render("registro", {
            title : "Registrate - LIFE"
        })
    },
    processCreate : (req, res) => { 
         let errores = validationResult(req);
        
        if(errores.isEmpty()) { //en caso de no haber ningun error
        
            const {name, surname, email, password } = req.body; //requiero los datos ingresados en el formulario de registro ya validados
            
            db.User.create({
                name : name.trim(),
                surname:surname.trim(),
                email,
                password : bcrypt.hashSync(password,12),
                rol : "user",
                avatar : "default.png",
                status:1

            })
            .then(()=>res.redirect('/account/login'))
            .catch(error => res.send(error))
        }else{
            return res.render('registro',{
                errores : errores.mapped(),
                old: req.body
            })
        }
    },
    
    /*controlador encargado de la logica y renderizar todas las vistas relacionadas con usuarios*/
    /*vista de login*/
    login : (req, res) => { 
        res.render( 'login', {
            title : "Ingresar - LIFE"
        })
    },
    /* chequeo de ingreso de login */
    processLogin : (req, res) => {
        let errores = validationResult(req);

        if(errores.isEmpty()){
          const {email, password, recordar} = req.body;
            
          db.User.findOne({
                where : {
                    email: email,
                  
                }
            })
            .then(user => { 
             // verificacion de rol de ususario//

                console.log(user)                                           
               if(user && bcrypt.compareSync(password, user.password)){   /* Encriptar e ingreso de usuario */
                     req.session.user = {
                      id : user.id,
                      name : user.name,
                      surname : user.surname,
                      email : user.email,
                      avatar : user.avatar,
                      status:1
                      //rol:user//
                    }
                    // verificacion de rol de ususario//



                  if(recordar){        /* Recordar contraseña */
                        res.cookie('user', req.session.user, {
                         maxAge : 1000 * 60
                        })
                    }
                     return res.redirect('profile')
                }else {
                    return res.render('login', {  /* En el caso de error se renderisa a vista de login y muestra error */
                        error : {
                            invalid:{
                                msg: "Credenciales Invalidas"
                            } 
                        } 
                    })
                } 
            }) 
           
        }else{
            return res.render('login', {
                errores : errores.mapped(),
                old : req.body
            })
        }

    },
    


    /* Cerrar session */
    logout : (req,res) => {
        req.session.destroy();
        if(req.cookies.user){
            res.cookie('user','',{
                maxAge: -1
            })
        }
        res.redirect('/');
    },
    /* Vista de perfil de usuario */
    profile : (req,res) => {
        res.render('profile')
    },

    profileEdit : (req,res) => {
        res.render('profileEdit')
    },

   /* profileEdit : (req, res) => {
        db.Addresses.findOne({
            where: {
                id: req.session.usuario.id
            }
        })
        .then(user => {
            res.render('profile', {
                title: 'Editar mis datos',
                session: req.session,
                user: user
            })
        })
    },*/
      
    
    profileUpdate : (req, res) => {
        db.Addresses.update({

      //faltaterminar//
    },{
            where: {
                id: req.session.usuario.id
            }
        })
        .then(() => {
            res.redirect('/profile/update/:id')
        })
    },

    profileDelete : (req, res) => {
         db.Users.destroy({
                where: {
                    id: req.session.usuario.id
                }
            })
            .then(() => {
                req.session.destroy();
                if(req.cookies.user){
                    res.cookie('user','',{maxAge:-1})
                }
                
                res.redirect('/')
            })
    },
    profileAdmin: (req,res)=>{
        res.render('admin/profileAdmin')
    }
    
}
