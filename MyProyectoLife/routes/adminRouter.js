var express = require('express');
var router = express.Router();
var adminController = require("../controllers/adminController");

/* MIDDLEWARES */
const upload = require('../middlewares/config_multer');


/* VALIDACIONES */


/*ENTIDAD ADMINISTRADORES*/


/*ENTIDAD PRODUCTOS*/

router.get("/product/list", adminController.productList);

router.get("/product/create", adminController.productCreate);
router.post("/product/store",upload.any(), adminController.productStore);

router.get("/product/edit/:id", adminController.productEdit);
router.put("/product/update/:id", adminController.productUpdate);

router.delete("/product/delete/:id", adminController.productDelete);
module.exports = router;