const path= require("path");
const bcrypt = require('bcrypt');
const {getUsers, setUsers} = require(path.join('..','data','users'));
const users_db = getUsers();

const {check, validationResult, body} = require('express-validator');

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

            let lastID = 0;
            users_db.forEach(user => {
                if(user.id > lastID) {
                    lastID = user.id
                }
            });

            let newUser = {
                id : +lastID +1,
                name : name,
                surname : surname,
                email : email,
                password : bcrypt.hashSync(password, 12),
                category : "user",
                avatar : "default.png"
            };
            users_db.push(newUser);

            setUsers(users_db);
            return res.redirect('login');

        }else {
            return res.render('registro', {
                errores : errores.mapped(),
                old : req.body
            })

        }

    },
    
    /*controlador encargado de la logica y renderizar todas las vistas relacionadas con usuarios*/
    /*vista de login*/
    login : (req, res) => { 
        res.render( "login", {
            title : "Ingresar - LIFE"
        })
    },
    /* chequeo de ingreso de login */
    processLogin : (req, res) => {
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('login', {
                errores : errores.errors 
            })
        }else{
        const {name, password, recordar, email} = req.body;
        let result = users_db.find(user => user.email === email);
        if(result){
            if(bcrypt.compareSync(password.trim(),result.password)){ /* Encriptar y ingreso de usuario */
                req.session.user = {
                    id : result.id,
                    name : result.name,
                    surname : result.surname,
                    email : result.email,
                    avatar : result.avatar
                }
                if(recordar != 'undefined'){        /* Recordar contraseña */
                    res.cookie('user', req.session.user, {
                        maxAge : 1000 * 60
                    })
                }
                return res.redirect('profile')
            }
        }
        return res.render('login', {  /* En el caso de error se renderisa a vista de login y mustra error */
            errores : errores.mapped(),
                old : req.body
        })
        }
    },
    /* Eliminar usuario */
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
        console.log(user)
    },

    profileEdit : (req, res) => {

    },
    profileUpdate : (req, res) => {

    },
    profileUpdate : (req, res) => {

    },
    profileDelete : (req, res) => {
        
    }
}