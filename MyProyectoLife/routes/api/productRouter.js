var express = require('express');
var router = express.Router();

const categoriaController = require('../../controllers/api/categoriaController')


router.get("/categoria/:id", categoriaController.categoria);

router.get("/:id", categoriaController.producto);

module.exports = router;