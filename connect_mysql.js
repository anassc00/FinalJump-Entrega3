const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

const sequelize = new Sequelize(
  "northwind",
  "root",
  "daniela123",

  {
    host: "localhost",
    dialect: "mysql",
  }
);

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

module.exports = sequelize;
