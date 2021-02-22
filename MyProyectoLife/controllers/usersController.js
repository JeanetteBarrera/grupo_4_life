const path= require("path");
const bcrypt = require('bcrypt');
const {getUsers, setUsers} = require(path.join('..','data','users'));
const users_db = getUsers();

const {validationResult} = require('express-validator');

module.exports = {

    create : (req, res) => { /*vista de registrarse para nuevos usuarios*/
        res.render("registro", {
            title : "Registrate - LIFE"
        })
    },
    processCreate : (req, res) => { 
        
        let errores = validationResult(req);
        
        if(errores.isEmpty()) { //en caso de no haber ningun error
        
            const {} = req.body; //requiero los datos del formulario de create

            let lastID = 0;
            users_db.forEach(user => {
                if(user.id > lastID) {
                    lastID = user.id
                }
            });

        }else {
            return res.render('registro')
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
        const {username, pass, recordar} = req.body;
        let result = db_users.find(user => user.email === email);
        if(result){
            if(bcrypt.compareSync(pass.trim(),result.pass)){ /* Encriptar y ingreso de usuario */
                req.session.user = {
                    id : result.id,
                    username : result.username
                }
                if(recordar != 'undefined'){        /* Recordar contraseña */
                    res.cookie('user', req.session.user, {
                        maxAge : 1000 * 60
                    })
                }
                return res.redirect('/profile')
            }
        }
        res.render('account/login',{  /* En el caso de error se renderisa a vista de login y mustra error */
            error : "Credenciales invalidas"
        })
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
    },
}