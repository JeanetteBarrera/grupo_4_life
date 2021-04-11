
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
    