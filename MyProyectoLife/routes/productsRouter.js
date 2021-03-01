var express = require('express');
var router = express.Router();

var productsController = require("../controllers/productsController");
var userCheck = require("../middlewares/userCheck")

/* rutas para carrito de compras*/

router.get("/cart",userCheck, productsController.cart);

/* rutas para productos*/

router.get("/product",productsController.lista);
router.get("/product/:id", productsController.detalle);


module.exports = router;