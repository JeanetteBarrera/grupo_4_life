var express = require('express');
var router = express.Router();

var productsController = require("../controllers/productsController");
var userCheck = require("../middlewares/userCheck")

/* rutas para carrito de compras*/

router.get("/cart",userCheck, productsController.cart);

/* rutas para productos*/

router.get("/list",productsController.lista);
router.get("/product/:id", productsController.detalle);

/*PRODUCTOS POR CATEGORIA*/
router.get('/category/:id');

/*PRODUCTOS POR SUBCATEGORIA*/
router.get('/subcategory/id');

module.exports = router;