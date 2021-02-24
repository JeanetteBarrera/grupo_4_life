module.exports = (req,res,next) => {
    if(req.cookies.userLife){
        req.session.user = req.cookies.userLife
    }
    next()
}