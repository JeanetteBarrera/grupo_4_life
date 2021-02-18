var express = require('express');
var router = express.Router();

var adminController = require("../controllers/adminController");

/*entidad productos*/
router.get("/product/create", adminController.productCreate);

module.exports = router;