const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");

/* MIDDLEWARES */
const upload = require('../middlewares/multerImagenes');
const adminCheck = require('../middlewares/adminCheck');
/* VALIDACIONES */
const productCreateValidator = require('../validations/productCreateValidator');
const productEditValidator = require('../validations/productEditValidator');

/*ENTIDAD ADMINISTRADORES*/


/*ENTIDAD PRODUCTOS*/

router.get("/product/list",adminCheck, adminController.productList);

router.get("/product/create",adminCheck, adminController.productCreate);
router.post("/product/store", upload.any(), productCreateValidator, adminController.productStore);

router.get("/product/edit/:id",adminCheck, adminController.productEdit);
router.put("/product/update/:id",upload.any(), productEditValidator,adminController.productUpdate);

router.delete("/product/delete/:id", adminController.productDelete);

router.get("/product/database/list",adminCheck, adminController.data);

module.exports = router;