
/*const products =require('../data/products');*/

const path= require("path");
const {getProducts, setProducts} = require(path.join('..','data','products'));
const products = getProducts();

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
        res.render("listaProducts",{
            product:products
        });
    },


    /*renderiza vista de detalle producto*/  
    detalle : (req, res) => {
        const datos = products.find(dato => dato.id === +req.params.id)
        console.log(datos);
        res.render("detalleProducto",{
            product:datos
        });
    },
    
}
    