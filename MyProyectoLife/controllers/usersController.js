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
                errores: errores.errors
            })

        }

    },
    
    /*controlador encargado de la logica y renderizar todas las vistas relacionadas con usuarios*/
    login : (req, res) => { /*vista de login*/
        res.render( "login", {
            title : "Ingresar - LIFE"
        })
    },


}