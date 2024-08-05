const { Router } = require("express");
const { sequelize } = require("../database/connect_mysql.js");
const RepartoModel = require("../database/models/reparto.model.js");

const Reparto = RepartoModel(
  sequelize,
  require("sequelize"),
  require("sequelize").DataTypes
);

const repartosRouter = Router();

// Obtener todos los repartos
repartosRouter.get("/", async (req, res) => {
  try {
    const repartos = await Reparto.findAll();
    res.json(repartos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un reparto por ID
repartosRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reparto = await Reparto.findByPk(id);
    if (reparto) {
      res.json(reparto);
    } else {
      res.status(404).json({ error: "Reparto not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo reparto
repartosRouter.post("/", async (req, res) => {
  try {
    const { actorId, contenidoId } = req.body; // Ajusta según los campos de tu tabla
    const newReparto = await Reparto.create({ actorId, contenidoId });
    res.status(201).json(newReparto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un reparto por ID
repartosRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const reparto = await Reparto.findByPk(id);
    if (reparto) {
      reparto.set(req.body);
      await reparto.save();
      res.status(202).json(reparto);
    } else {
      res.status(404).json({ error: "Reparto not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un reparto por ID
repartosRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Reparto.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Reparto not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { repartosRouter };
