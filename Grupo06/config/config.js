const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3001,

    /** DATABASE */
    database: {
      HOST: process.env.DB_HOST || 'localhost',
      USER: process.env.DB_USER,
      PASSWORD: process.env.DB_PASS,
      NAME: process.env.DB_NAME,
      PORT: process.env.DB_PORT || 3306,
      DIALECT: "mysql"
  }
}