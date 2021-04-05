var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController");

/* MIDDLEWARES */
const upload = require('../middlewares/multerImagenes');
const productCreateValidator = require('../validations/productCreateValidator');

/* VALIDACIONES */


/*ENTIDAD ADMINISTRADORES*/


/*ENTIDAD PRODUCTOS*/

router.get("/product/list", adminController.productList);

router.get("/product/create", adminController.productCreate);
router.post("/product/store", upload.any(), productCreateValidator, adminController.productStore);

router.get("/product/edit/:id", adminController.productEdit);
router.put("/product/update/:id",upload.any(),adminController.productUpdate);

router.delete("/product/delete/:id", adminController.productDelete);
module.exports = router;