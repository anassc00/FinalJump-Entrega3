const { Sequelize } = require('sequelize');
const { database } = require('../config/config');

const sequelize = new Sequelize(
    database.NAME, 
    database.USER, 
    database.PASSWORD, 
    {
        host: database.HOST,
        dialect: database.DIALECT
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
  
  sequelize.close().then(() => {
    console.log('Clouse Connection.');
  }).catch((error) => {
    console.error('Unable clouse to Connection to the database: ', error);
  });
  
  module.exports = sequelize;