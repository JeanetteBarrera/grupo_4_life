const db = require('../database/models');

module.exports = (req, res, next) => {
    db.Users.findByPk(req.session.usuario.id)
        .then(user => {
            if(user.rol == "admin"){
            
               if(admin){
                next();
               }else{
                res.redirect('/');
               }
            
            }else{
                res.redirect('/login');
            }
        })
}