/*
const { Sequelize, DataTypes, Op } = require('sequelize');
const db = require('../../config/config');

const sequelize = new Sequelize(
    config.DATABASE.DB_NAME,
    config.DATABASE.DB_USER,
    config.DATABASE.DB_PASSWORD,
    {
        host: db.DB_HOST,
        dialect: 'mysql', 
    }
);

const database = {};
database.Sequelize = Sequelize;
database.Op = Op;
database.sequelize = sequelize;

// Inicialización de las tablas
database.actor = require('./actor.model.js')(sequelize, Sequelize, DataTypes);
database.categoria = require('./categoria.model')(sequelize, Sequelize, DataTypes);
database.contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);
database.genero = require('.genero.model.js')(sequelize, Sequelize, DataTypes);
database.reparto = require('./reparto.model')(sequelize, Sequelize, DataTypes);
database.tag = require('./tag.model')(sequelize, Sequelize, DataTypes);
database.tagsDeContenido = require('./tagsDeContenido.model')(sequelize, Sequelize, DataTypes);

// Relaciones entre las tablas
database.actor.belongsToMany(database.contenido, { 
    through: database.reparto,
    foreignKey: 'actor_id',
    otherKey: 'contenido_id'
});
database.contenido.belongsToMany(database.actor, {
    through: database.reparto,
    foreignKey: 'contenido_id',
    otherKey: 'actor_id'
});
//database.categoria.hasMany(db.contenido, { foreignKey: 'categoria_id' });
//database.contenido.belongsTo(db.categoria, { foreignKey: 'categoria_id' });
//database.genero.hasMany(db.contenido, { foreignKey: 'genero_id' });
//database.contenido.belongsTo(db.genero, { foreignKey: 'genero_id' });
database.contenido.belongsToMany(db.tag, {
    through: db.tagsDeContenido,
    foreignKey: 'contenido_id',
    otherKey: 'tag_id'
});
database.tag.belongsToMany(database.contenido, {
    through: database.tagsDeContenido,
    foreignKey: 'tag_id',
    otherKey: 'contenido_id'
});

// Exportamos las tablas y la instancia de Sequelize
sequelize.sync({force: true}).then(() => {
    console.log("Database synchronized successfully.");
}).catch((error) => {
    console.log("Error syncing database: ", error);
});

module.exports = database;
*/
