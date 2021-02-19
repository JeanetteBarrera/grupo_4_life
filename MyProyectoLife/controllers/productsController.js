const products =require('../data/products');

module.exports = {

    index : (req, res) => {
        res.render('products',{
            products

        });
    },
    /*controlador encargado de la logica y renderizar toda lo relacionado con los productos*/
    cart : (req, res) => {
        res.render("carrito");
    },
    
    lista: (req, res) => {
        res.render("listaProducts");
    },

    /*renderiza vista de detalle producto*/
    detalle : (req, res) => {
        res.render("detalleProducto",{
             
        });
    },
    /*renderiza vista de create producto*/
    create: (req, res) => {
        res.render("productCreate");
    },
    edite: (req, res) => {
        res.render("productEdit");
    },
    list: (req, res) => {
        res.render("productList");
    },
}
    