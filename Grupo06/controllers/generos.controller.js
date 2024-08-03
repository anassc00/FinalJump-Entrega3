const { Router } = require("express");
const { sequelize } = require("../database/connect_mysql.js");
const GeneroModel = require("../database/models/Genero.model.js");

const Genero = GeneroModel(
  sequelize,
  require("sequelize"),
  require("sequelize").DataTypes
);

const generosRouter = Router();

generosRouter.get("/genero", async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { generosRouter };
