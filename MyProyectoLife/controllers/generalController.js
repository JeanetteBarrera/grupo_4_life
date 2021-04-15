const path = require("path");
const fs = require("fs");
const db = require('../database/models');

module.exports = {

    /*renderiza vista del home*/
    index : (req, res) => {
        let mujerSub = db.Subcategory.findAll({where:{categoryId:1 }});
        let hombreSub = db.Subcategory.findAll({where:{categoryId:2}});
        
        Promise.all([mujerSub, hombreSub])
        .then(([mujerSub,hombreSub]) => {
            res.render('index',{
                hombreSub,
                mujerSub,
            });
        })
        .catch(errores =>{
            console.log(errores)
        })
    },
    

        equipo : (req, res) =>{
        res.render('equipo')
     },

     life : (req, res) =>{
        res.render('life')
     }, 
}
    

