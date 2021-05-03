const db = require('../database/models')
const path= require("path");
const bcrypt = require('bcrypt');
const fs = require('fs');
const {check,validationResult,body} = require('express-validator');

const { Op } = require("sequelize");


module.exports = {
    create : (req, res) => { /*vista de registrarse para nuevos usuarios*/
        res.render("registro", {
            title : "Sign In- LIFE"
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
            .then((user)=>{
                req.session.user = {
                    id : user.id,
                    name : user.name,
                    surname : user.surname,
                    email : user.email,
                    avatar : user.avatar,
                    rol: user.rol,
                    status:1,
                    address: user.address,
                    phone: user.phone,
                    country: user.country,
                    state: user.state
                  }
                res.redirect('/')
            })
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
            title : "Log In - LIFE"
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
                    status: 1
                }
            })
            .then(user => { 
             // verificacion de rol de ususario//
               if(user && bcrypt.compareSync(password, user.password)){   /* Encriptar e ingreso de usuario */
                     req.session.user = {
                      id : user.id,
                      name : user.name,
                      surname : user.surname,
                      email : user.email,
                      avatar : user.avatar,
                      rol: user.rol,
                      status:1,
                      address: user.address,
                      phone: user.phone,
                      country: user.country,
                      state: user.state
                    }
                    // verificacion de rol de ususario//
                    if(recordar){ /* Recordar contraseña */
                        res.cookie('user', req.session.user, {
                            maxAge : 1000 * 60
                            })
                    }
                    if (user.rol=="admin") {
                        return res.redirect('admin/profile')
                    }else {
                        return res.redirect('/')
                    }
                }
            })
        }else {

            return res.render('login', {  /* En el caso de error se renderisa a vista de login y muestra error */
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
       if(req.session.user) {
           db.User.findOne({
               where: { 
                   id: req.session.user.id
                },
           }).then(user => {
               res.render('profile',{
                   user:user
               })
           })
       }else{
           return(res.redirect("/"))
       }

    },
   
    profileUpdate : (req, res) => {
        //console.log(req.body)
            db.User.update(
                {
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    avatar:(req.files[0])?req.files[0].filename:req.session.user.avatar,
                    address: req.body.address,
                    phone: req.body.phone,
                    country: req.body.country,
                    state: req.body.state
                },
                {
                    where: {id: req.params.id}
                }
            )
            .then(result=> {
                db.User.findByPk(req.session.user.id)
                .then(user => {
                    if(req.session.user.avatar != user.avatar){
                            
                        if(fs.existsSync('public/images/avatars/'+req.session.user.avatar)&&req.session.user.avatar != "default.png"){
                            fs.unlinkSync('public/images/avatars/'+req.session.user.avatar)
                        }
                            req.session.user.avatar = user.avatar
                    }
                    res.redirect('/')
                })
                .catch(errores=>{
                    console.log(errores)
                })
            })
            .catch(errores =>{
                console.log(errores)
            })
 
    },

    profileDelete : (req, res) => {

        req.session.destroy();
        if(req.cookies.user){
            res.cookie('user','',{maxAge:-1});
        }
        db.User.update({
            status:0
        },
        {
            where:{id: req.params.id}
        }).then((dato)=> {
            //console.log(dato)
            res.redirect('/')
        }).catch(errores=>{
            console.log(errores)
        } )
    },
    profileAdmin: (req,res)=>{
        res.render('admin/profileAdmin')
    }
    
}
