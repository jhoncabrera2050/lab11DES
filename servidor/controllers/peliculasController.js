const Peliculas = require("../models/Peliculas");

exports.crearPelicula = async (req, res) => {
    try {
        const pelicula = new Peliculas(req.body);
        await pelicula.save();
        res.send(pelicula);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPelicula = async (req, res) => {

    try {

        const pelicula = await Peliculas.find();
        res.json(pelicula);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


