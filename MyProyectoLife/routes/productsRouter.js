var express = require('express');
var router = express.Router();

var productsController = require("../controllers/productsController");

/* rutas para carrito de compras*/

router.get("/cart", productsController.cart);

/* rutas para productos*/
router.get("/product/:id", productsController.detalle);


module.exports = router;