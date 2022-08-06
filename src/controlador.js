const ModeloCarros = require('./modelo');


async function obtenerTodosLosCarros(req, res) {
    try {
        const Carros = await ModeloCarros.findAll();
        res.status(200).json(Carros);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    obtenerTodosLosCarros
}