const { Sequelize } = require("sequelize");
//const { db } = require("../config");

const dotenv = require("dotenv");
dotenv.config();

const db = {
  HOST: process.env.HOST || "localhost",
  USER: process.env.USER || "root",
  PASSWORD: process.env.PASSWORD || "daniela123",
  PORT: process.env.PORT || "3306",
  DIALECT: process.env.DIALECT || "mysql",
  NAME: process.env.NAME || "trailerflix",
};

const sequelize = new Sequelize(
  db.NAME,
  db.USER,
  db.PASSWORD,

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
