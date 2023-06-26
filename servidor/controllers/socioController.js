const Socio = require("../models/Socio");

exports.crearSocio = async (req, res) => {
    try {
        const socio = new Socio(req.body);

        await socio.save();
        res.send(socio);


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

