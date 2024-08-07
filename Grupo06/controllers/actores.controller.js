const { Router } = require("express");
const { sequelize } = require("../database/connect_mysql.js");
const ActorModel = require("../database/models/actor.model.js");

const Actor = ActorModel(
  sequelize,
  require("sequelize"),
  require("sequelize").DataTypes
);

const actorsRouter = Router();

// Obtener todos los actores
actorsRouter.get("/", async (req, res) => {
  try {
    const actors = await Actor.findAll();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un actor por ID
actorsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);
    if (actor) {
      res.json(actor);
    } else {
      res.status(404).json({ error: "Actor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo actor
actorsRouter.post("/", async (req, res) => {
  try {
    const { nombre } = req.body;
    const newActor = await Actor.create({ nombre });
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un actor por ID
actorsRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);
    if (actor) {
      actor.set(req.body);
      await actor.save();
      res.status(202).json(actor);
    } else {
      res.status(404).json({ error: "Actor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un actor por ID
actorsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Actor.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Actor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = { actorsRouter };

