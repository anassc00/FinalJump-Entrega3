const { Router } = require('express');
const { sequelize } = require('../database/connect_mysql.js');
const ContenidoModel = require('../database/models/contenido.model.js');


const Contenido = ContenidoModel(sequelize, require('sequelize'), require('sequelize').DataTypes);

const contenidosRouter = Router();

contenidosRouter.get('/contenido', async (req, res) => {
    try {
        const contenidos = await Contenido.findAll();
        res.json(contenidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = { contenidosRouter };
