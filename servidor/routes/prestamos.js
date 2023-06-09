//Rutas producto
const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamosController');

//api/productos
router.post('/prestamos', prestamoController.realizarPrestamo);
router.get('/peliculas', prestamoController.obtenerPelicula);
router.get('/', prestamoController.listarPrestamos);
router.get('/socios', prestamoController.obtenerSocio);
router.get('/listar', prestamoController.listarPrestamos);
router.delete('/:id', prestamoController.eliminarPrestamo);
module.exports = router;
