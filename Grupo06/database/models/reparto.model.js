
module.exports = (sequelize, Sequelize, DataTypes) => {
    const Reparto = sequelize.define('reparto_de_contenido', {
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

    return Reparto;
}
