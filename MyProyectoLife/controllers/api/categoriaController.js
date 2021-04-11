const path = require("path");
const fs = require("fs");
const db = require('../../database/models');

module.exports = {

    categoria: (req, res) => {

        let id = req.params.id;

        db.Category.findOne({ 
            where:{id:id},
            include: { association:"subcategoria", attributes:["id", "subcategory"] }
        })
        .then(result =>{
            res.json(result)
        
        })
    },
    producto: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock",  include:[{association:"Size"}]}]}]
        })
        .then(product =>{
            res.json(product)
        })
    },
    all: (req, res)=> {
        console.log("Estoy dentro del api");
        db.Product.findAll({
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock",  include:[{association:"Size"}]}]}],
            where:{status: true}
        }).then(result=>{
            res.json(result)
            
        }).catch(errores=>{
            console.log(errores)
        })
    }
    

}