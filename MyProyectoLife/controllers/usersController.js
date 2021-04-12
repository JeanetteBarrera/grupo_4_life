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
                      avatar :"default.png",
                      status:1,
                    }
                    // verificacion de rol de ususario//

                  if(recordar){        /* Recordar contraseña */
                        res.cookie('user', req.session.user, {
                         maxAge : 1000 * 60
                        })
                    }
                     console.log(user.rol)
                    if (user.rol=="admin") {
                    return res.redirect('admin/profile')
                    } else {
                        return res.redirect('profile')
                    }
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
        db.Users.findOne({
            where: {
                id: req.params.id
            },
            include:[{association:"domicilio"}],
        })
        .then(user => {
            db.Addresses.findAll({
                include:[{association:"domicilio"}],
            })
            .then(()=>{
                console.log()
                 res.render('profile', {
                session: user
                
                })
           }) 
        })
        .catch(errores => {
            console.log(errores)
        })
    },
    */
      
    
    profileUpdate : (req, res) => {
      db.Users.findOne({
        where:{ id:req.params.id
        },  //buscar id de ususario//
         include:[{association:"domicilio"}]

        })
        .then((usuario)=>{
            db.update({
                name :req.body.name!= ''?req.body.name.trim():null,
                surname : req.body.surname!= ''?req.body.surname.trim():null,

            })
            .then(()=>{
                db.Addresses.update({
                    phone: req.body.phone != ''?req.body.telefono.trim():null,
                    street: req.body.street != ''?req.body.street.trim():null,
                    number: req.body.number != ''?req.body.number:null,
                    depto: req.body.dpto != ''?req.body.depto.trim():null,
                    piso: req.body.piso != ''?req.body.piso.trim():null,
                    zioCode: req.body.zipCode != ''?req.body.zipCode.trim():null,
                    country: req.body.country != ''?req.body.country.trim():null,
                    state: req.body.provincia != '' && req.body.state != 0 ?req.body.state.trim():null,
                    city: req.body.city != '' && req.body.city != 0 ?req.body.city.trim():null,
            
                    where: {
                        id:usuario.domicilio .id


                    }
                })
            })
            .catch(errores=>{
              console.log(errores)
            })

        })
      
        db.Addresses.update({
            phone: req.body.phone != ''?req.body.telefono.trim():null,
            street: req.body.street != ''?req.body.street.trim():null,
            number: req.body.number != ''?req.body.number:null,
            depto: req.body.dpto != ''?req.body.depto.trim():null,
            piso: req.body.piso != ''?req.body.piso.trim():null,
            zioCode: req.body.zipCode != ''?req.body.zipCode.trim():null,
            country: req.body.country != ''?req.body.country.trim():null,
            state: req.body.provincia != '' && req.body.state != 0 ?req.body.state.trim():null,
            city: req.body.city != '' && req.body.city != 0 ?req.body.city.trim():null
    },{
            where: {
                id: usuario.domicilio [i].id
            }
        })
        .then(() => {
            res.redirect('/account/profile')
        })
    },

    profileDelete : (req, res) => {
         db.Users.update({
             status:0
         },
            {
                where: {id: req.params.id}
            })
            .then(() => {
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
