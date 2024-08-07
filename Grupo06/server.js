
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const config = require("./config/config.js");
const PORT = config.PORT || 3001;
const { sequelize } = require("./database/connect_mysql.js");
const { generosRouter } = require("./controllers/generos.controller.js");
const { actorsRouter } = require("./controllers/actores.controller.js");
const { repartosRouter } = require("./controllers/repartos.controller.js");
const { tagsDeContenidoRouter } = require("./controllers/tagsDeContenido.controller.js");
const { tagsRouter } = require("./controllers/tags.controller.js");
const { contenidosRouter } = require("./controllers/contenidos.controller.js");
const { categoriasRouter } = require("./controllers/categorias.controller.js");
const {
  Actor,
  Categoria,
  Contenido,
  Genero,
  Reparto,
  Tag,
  TagsDeContenido,
} = require("./database/models");

const corsOptions = { origin: "http://localhost:" + config.PORT };

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "This is the landing page for the moment" });
});

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the db: ", error);
  }
}

async function closeConnection() {
  try {
    await sequelize.close();
    console.log("Connection has been closed successfully.");
  } catch (error) {
    console.error("Unable to close the connection to the db: ", error);
  }
}

authenticate();

app.use("/api/generos", generosRouter);
app.use("/api/actors", actorsRouter);
app.use("/api/repartos", repartosRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/contenidos", contenidosRouter);
app.use("/api/tags", tagsRouter);
app.use("/api/tags-de-contenido", tagsDeContenidoRouter);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    // Imprime las rutas
    app._router.stack.forEach((r) => {
      if (r.route && r.route.path) {
        console.log(`Route: ${r.route.path}`);
      }
    });
  })
  .catch(error => {
    console.error('Error synchronizing database:', error);
  });



