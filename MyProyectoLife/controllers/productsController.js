const products =require('../data/db-products');

module.exports = {

    /*controlador encargado de la logica y renderizar toda lo relacionado con los productos*/
    cart : (req, res) => {
        res.render("carrito");
    },

    /*renderiza vista de detalle producto*/
    detalle : (req, res) => {
        res.render("detalleProducto");
    },
    /*renderiza vista de create producto*/
    create: (req, res) => {
        res.render("admin");
    }
    
}
    