const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");

/* MIDDLEWARES */
const upload = require('../middlewares/multerImagenes');

/* VALIDACIONES */
const productCreateValidator = require('../validations/productCreateValidator');
const productEditValidator = require('../validations/productEditValidator');

/*ENTIDAD ADMINISTRADORES*/
router.get("/users/list", adminController.usersList);

/*ENTIDAD PRODUCTOS*/

router.get("/product/list", adminController.productList);

router.get("/product/create", adminController.productCreate);
router.post("/product/store", upload.any(), productCreateValidator, adminController.productStore);

router.get("/product/edit/:id", adminController.productEdit);
router.put("/product/update/:id",upload.any(), productEditValidator,adminController.productUpdate);

router.delete("/product/delete/:id", adminController.productDelete);

router.get("/product/database/list", adminController.data);

module.exports = router;