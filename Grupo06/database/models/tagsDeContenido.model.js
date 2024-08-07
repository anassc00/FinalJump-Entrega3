module.exports = (sequelize, Sequelize, DataTypes) => {
    const Tags = require('./tag.model')(sequelize, Sequelize, DataTypes);
    const Contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);

    const TagsDeContenido = sequelize.define('tags_de_contenidos', {
        contenido_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'contenidos', // Asegúrate de que este nombre coincide con el de la tabla en la base de datos
                key: 'id',
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tags', // Asegúrate de que este nombre coincide con el de la tabla en la base de datos
                key: 'id',
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'tags_de_contenidos' // Asegúrate de que el nombre coincida con el de la tabla en la base de datos
    });

    // Definir las asociaciones
    Tags.belongsToMany(Contenido, {
        through: TagsDeContenido,
        foreignKey: 'tag_id',
        otherKey: 'contenido_id'
    });
    Contenido.belongsToMany(Tags, {
        through: TagsDeContenido,
        foreignKey: 'contenido_id',
        otherKey: 'tag_id'
    });

    return TagsDeContenido;
}
