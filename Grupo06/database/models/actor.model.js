module.exports = (sequelize, Sequelize, DataTypes) => {
    const Actor = sequelize.define('actor', {
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
<<<<<<< HEAD
        tableName: 'actor',
=======
>>>>>>> 1eaa125c55830e1126591a897d97a1394f7b8548
        timestamps: false,
        underscored: true,
    });
    return Actor;
}

