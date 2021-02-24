const path= require("path");
const {getUsers, setUsers} = require(path.join('..','data','users'));
const users_db = getUsers();

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