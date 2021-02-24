const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
const users_db = JSON.parse(fs.readFileSync('./data/users.json','utf-8'));

const {validationResult} = require('express-validator');




module.exports = {

    /*controlador encargado de la logica y renderizar todas las vistas relacionadas con usuarios*/
    

    login : (req, res) => { /*vista de login*/
        res.render( "login", {
            title : "Ingresar - LIFE"
        })
    },

    create : (req, res) => { /*vista de registrarse para nuevos usuarios*/
        res.render("registro", {
            title : "Registrate - LIFE"
        })
    }
}