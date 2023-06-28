//Rutas producto
const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculasController');

//api/productos
router.post('/', peliculaController.crearPelicula);
router.get('/', peliculaController.obtenerPelicula);
router.delete('/:id', peliculaController.eliminarPelicula);
module.exports = router;