//Rutas producto
const express = require('express');
const router = express.Router();
const socioController = require('../controllers/socioController');

//api/productos
router.post('/', socioController.crearSocio);
router.get('/', socioController.obtenerSocio);
module.exports = router;
