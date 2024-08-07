// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");
// const config = require('../config/config.js');
// dotenv.config();

// const db = {
//   HOST: process.env.DB_HOST || "localhost",
//   USER: process.env.DB_USER || "root",
//   PASSWORD: process.env.DB_PASS || "mysql1234",
//   DB: process.env.DB_NAME || "trailerflix",
//   DB_PORT: process.env.DB_PORT || 3306,
//   DIALECT: process.env.DB_DIALECT || "mysql",
// };

// const sequelize = new Sequelize("trailerflix", "root", "limon445", {
//   host: "localhost",
//   dialect: "mysql",
// });

// /*async function authenticate() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the db: ", error);
//   }
// }

// async function closeConnection() {
//   try {
//     await sequelize.close();
//     console.log("Connection has been closed successfully.");
//   } catch (error) {
//     console.error("Unable to close the connection to the db: ", error);
//   }
// }

// authenticate();*/

// module.exports = { sequelize };

////////////////////////////////////////////////////////////////////////
// const { Sequelize } = require('sequelize');
// const config = require('../config/config.js');

// const sequelize = new Sequelize(config.DATABASE.DB_NAME, config.DATABASE.DB_USER, config.DATABASE.DB_PASSWORD, {
//   host: config.DATABASE.DB_HOST,
//   port: config.DATABASE.DB_PORT,
//   dialect: config.DATABASE.DIALECT,
// });

// module.exports = {
//   sequelize,
// };
///////////////////////////////////////////////////////////////////

/*async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the db: ', error);
  }
}

async function closeConnection() {
  try {
    await sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close the connection to the db: ', error);
  }
}

// Call authenticate when this file is imported
authenticate();

module.exports = { sequelize, authenticate, closeConnection };*/


const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const config = require('../config/config.js');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'trailerflix',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'limon445',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306
  }
);

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the db: ', error);
  }
}

async function closeConnection() {
  try {
    await sequelize.close();
    console.log('Connection has been closed successfully.');
  } catch (error) {
    console.error('Unable to close the connection to the db: ', error);
  }
}

// Call authenticate when this file is imported
authenticate();

module.exports = { sequelize, authenticate, closeConnection };