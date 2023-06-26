const mongoose = require('mongoose');

const PrestamoSchema = mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pelicula',
        required: true
    },
    socio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Socio',
        required: true
    },
    fechaPrestamo: {
        type: Date,
        default: Date.now()
    },
    fechaDevolucion: {
        type: Date
    }
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);
