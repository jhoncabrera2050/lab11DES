const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    
    titulo: {
        type: String,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    actores: {
        type: Number,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Pelicula', PeliculaSchema)