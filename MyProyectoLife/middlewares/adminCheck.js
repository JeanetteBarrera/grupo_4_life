module.exports = (req, res, next) => {
    if (req.session.user.rol == "admin") {
        next();
    } else {
        res.redirect("/")
    }
}
/*module.exports = (req, res, next) => {
    db.Users.findByPk(req.session.usuario.id)
        .then(user => {
            let admin = false
            if(user.status== 0){
                admin = true
            }
            if(admin){
                next();
            }else{
                res.redirect('/')
            }
        })
        .catch(err => {
            res.redirect('/')
        })
}*/