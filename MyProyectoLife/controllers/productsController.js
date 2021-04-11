const path = require("path");
const fs = require("fs");
const db = require('../database/models');

/*const products =require('../data/products');
const path= require("path");
const {getProducts, setProducts} = require(path.join('..','data','products'));
const products = getProducts();*/

module.exports = {

    index : (req, res) => {
        res.render('products',{
            products

        });
    },
    /*controlador encargado de la logica y renderizar toda lo relacionado con los productos*/
    /*CARRITO DE COMPRAS*/
    
    cart : (req, res) => {
        let userId = req.session.usuario.id;
        db.Carts.findAll({
            where: {
                usuarioId: userId
            },
            include: [{association: 'producto',
            include:[{association:'imagenes'}]}]
        })
        .then(productos => {
            db.Users.findByPk(userId)
            .then(usuario => {
                res.render('/carrito', {
                    title: "Carrito de compras",
                    session: req.session,
                    subcategories: req.subcategorias,
                    productos: productos,
                    usuario: usuario
                })
            })
        })
    },
    
    lista: (req, res) => {
        db.Product.findAll({
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock",  include:[{association:"Size"}]}]}],
            where:{status: true}
        }).then(result=>{
            res.render("listaProducts",{
                producto:result
            });
        }).catch(errores=>{
            console.log(errores)
        })
    },


    /*renderiza vista de detalle producto*/  
    detalle : (req, res) => {
        db.Product.findOne({
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock",  include:[{association:"Size"}]}]}],
            where:{
                status: true,
                id: req.params.id
            }
        }).then((result)=>{
            res.render("detalleProducto",{
                result
            })
        });

        /*const datos = products.find(dato => dato.id === +req.params.id)
        console.log(datos);
        res.render("detalleProducto",{
            product:datos
        });*/
    },
    filtrarSub: (req, res)=> {
        db.Product.findAll({
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock",  include:[{association:"Size"}]}]}],
            where:{
                status: true,
                subcategoryId: req.params.id
            }
        }).then((result)=>{
            db.Subcategory.findOne({
                where:{id : req.params.id}
            })
            .then(subcategoria =>{
                res.render("listaProducts",{
                    producto:result,
                    subcategoria,
                    title : "LIFE -"+ subcategoria.subcategory
                })
    
            }).catch(errores => {
                console.log(errores)
            })
        }).catch(errores=>{
            console.log(errores)
        })
    }
}
    