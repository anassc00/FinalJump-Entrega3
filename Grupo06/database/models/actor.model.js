module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = sequelize.define('actors', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'actors',
        timestamps: false,
        underscored: true,
    });
    return Actor;
}

