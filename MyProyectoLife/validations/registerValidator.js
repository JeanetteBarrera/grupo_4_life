const path = require('path'); //requiero path 
const {check, body} = require('express-validator'); //requiero express-validator 
const {getUsers, setUsers} = require(path.join('..','data','users')); 
const users_db = getUsers();

module.exports = [

]