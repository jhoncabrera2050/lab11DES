const Prestamo = require("../models/Prestamos");
const Pelicula = require("../models/Peliculas");
const Socio = require("../models/Socio");

exports.realizarPrestamo = async (req, res) => {
  try {
    console.log(req.body);
    const socioId = req.body.socio;
    const peliculaId = req.body.pelicula;
    console.log(socioId, peliculaId)
    const [pelicula, socio] = await Promise.all([
      Pelicula.findById(peliculaId).lean(),
      Socio.findById(socioId).lean()
    ]);

    if (!pelicula || !socio) {
      return res.status(404).json({ error: "Película o socio no encontrado" });
    }

    if (!pelicula.disponible) {
      return res.status(400).json({ error: "La película no está disponible" });
    }

    const prestamo = new Prestamo({
      pelicula: peliculaId,
      socio: socioId
    });

    await prestamo.save();
    console.log(prestamo)
    pelicula.disponible = false;
    await pelicula.save();

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