
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = require('./actor.model')(sequelize, Sequelize, DataTypes);
    const Contenido = require('./contenido.model')(sequelize, Sequelize, DataTypes);
    const Reparto = sequelize.define('reparto_de_contenidos', {
        contenido_id: {
            type: DataTypes.INTEGER, // Cambiar a BIGINT si es necesario
            allowNull: false,
            references: {
                model: 'contenido',
                key: 'id',
            }
        },
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'actor',
                key: 'id',
            }
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'reparto_de_contenido'
    });
<<<<<<< HEAD
=======
    
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
>>>>>>> 1eaa125c55830e1126591a897d97a1394f7b8548

    return Reparto;
}
