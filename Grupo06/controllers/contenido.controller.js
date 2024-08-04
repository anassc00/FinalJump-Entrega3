const db = require("../database/models");
const Contenido = db.contenido;
const Op = db.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo) {
        res.status(400).send({
            message: "Falta el titulo"
        });
        return;
    }

    if (!req.body.resumen) {
        res.status(400).send({
            message: "Falta el resumen"
        });
        return;
    }

    if (!req.body.categoria_id) {
        res.status(400).send({
            message: "Falta asociarlo a alguna categoria existente"
        });
        return;
    }

    if (!req.body.genero_id) {
        res.status(400).send({
            message: "Falta asociarlo a algun genero existente"
        });
        return;
    }

    // Create a Contenido
    const contenido = {
        titulo: req.body.titulo,
        poster: req.body.poster || null,
        trailer: req.body.trailer || null,
        resumen: req.body.resumen,
        categoria_id: req.body.categoria_id,
        genero_id: req.body.genero_id
    };

    // Save Contenido in the database
    Contenido.create(contenido)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Contenido."
            });
        });
};
