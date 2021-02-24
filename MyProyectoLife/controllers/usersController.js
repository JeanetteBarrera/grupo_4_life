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

            let lasID = 0;
            users_db.forEach(user => {
                if(user.id > lastID) {
                    lastID = user.id
                }
            });

        }

    },
    
    /*controlador encargado de la logica y renderizar todas las vistas relacionadas con usuarios*/
    login : (req, res) => { /*vista de login*/
        res.render( "login", {
            title : "Ingresar - LIFE"
        })
    },


}