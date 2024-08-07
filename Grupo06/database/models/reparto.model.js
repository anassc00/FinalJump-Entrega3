
// module.exports = (sequelize, Sequelize, DataTypes) => {
//     const Actor = require('./actor.model')(sequelize, Sequelize, DataTypes);
//     const Contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);
//     const Reparto = sequelize.define('reparto_de_contenidos', {
//         contenido_id: {
//             type: DataTypes.INTEGER, // Cambiar a BIGINT si es necesario
//             allowNull: false,
//             references: {
//                 model: 'contenidos',
//                 key: 'id',
//             }
//         },
//         actor_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: 'actores',
//                 key: 'id',
//             }
//         }
//     }, {
//         timestamps: false,
//         underscored: true,
//         tableName: 'reparto_de_contenidos'
//     });

//     return Reparto;
// }

module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = require('./actor.model')(sequelize, Sequelize, DataTypes);
    const Contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);
    const Reparto = sequelize.define('reparto_de_contenidos', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contenido_id: {
            type: DataTypes.INTEGER, // Cambiar a BIGINT si es necesario
            allowNull: false,
            references: {
                model: 'contenidos',
                key: 'id',
            }
        },
        actors_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'actors',
                key: 'id',
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'reparto_de_contenidos'
    });
    Actor.belongsToMany(Contenido, { 
        through: Reparto,
        foreignKey: 'actor_id',
        otherKey: 'contenido_id'
    });
    Contenido.belongsToMany(Actor, {
        through: Reparto,
        foreignKey: 'contenido_id',
        otherKey: 'actor_id'
    });

    Actor.sync().then(() => {
        console.log('Tabla de actores sincronizada');
    });
    Contenido.sync().then(() => {
        console.log('Tabla de contenidos sincronizada');
    });
    Reparto.sync().then(() => {
        console.log('Tabla de reparto sincronizada');
    }); 

    return Reparto;
}
