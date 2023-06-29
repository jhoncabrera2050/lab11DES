const Prestamo = require("../models/Prestamos");
const Pelicula = require("../models/Peliculas");
const Socio = require("../models/Socio");


exports.realizarPrestamo = async (req, res) => {
  try {
    const socioId = req.body.socio;
    const peliculaId = req.body.pelicula;

    const [pelicula, socio] = await Promise.all([
      Pelicula.findById(peliculaId),
      Socio.findById(socioId)
    ]);

    console.log(pelicula, socio)

    const prestamo = new Prestamo({
      pelicula: peliculaId,
      socio: socioId,
      fechaDevolucion: req.body.fechaDevolucion
    });
    console.log(prestamo)
    await prestamo.save();

    console.log(prestamo)
    await Pelicula.findByIdAndUpdate(peliculaId, { disponible: false });

    res.json(prestamo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.listarPrestamos = async (req, res) => {
  try {
    const prestamos = await Prestamo.find();
    res.json(prestamos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerPelicula = async (req, res) => {

  try {

      const pelicula = await Pelicula.find();
      res.json(pelicula);
      
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }

}

exports.obtenerSocio = async (req, res) => {

  try {
      const socio = await Socio.find();
      res.json(socio);
      
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }

}

exports.eliminarPrestamo = async (req, res) => {

  try {

      let prestamo = await Prestamo.findById(req.params.id);

      if(!prestamo){
          res.status(404).json({ msg: 'No existe el prestamo'});
      }

      prestamo = await Prestamo.findOneAndRemove(req.params.id);

      res.json({ msg: 'El prestamo: ' + prestamo.prestamo + ' se ha eliminado' });
      
  } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error');
  }

}