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

exports.eliminarPelicula = async (req, res) => {

    try {

        let pelicula = await Peliculas.findById(req.params.id);

        if(!pelicula){
            res.status(404).json({ msg: 'No existe la pelicula'});
        }

        pelicula = await Peliculas.findOneAndRemove(req.params.id);

        res.json({ msg: 'La pelicula: ' + pelicula.pelicula + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
