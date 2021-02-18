var express = require('express');
var router = express.Router();

const { index, list, detalle, edit, create, store, update, borrar } = require('../controllers/admincontroller');

/* GET home page. */
router.get('/',index);

router.get('/product', list);
router.get('/product/:id', detalle);
router.get('/product/:id/edit', edit);

router.get('/product/create', create);
router.post('/product', store);

router.put('/product/:id', update);

router.delete('/product/delete/:id', borrar);


module.exports = router;
