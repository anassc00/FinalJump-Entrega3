const dotenv = require('dotenv');
dotenv.config();

/* DATABASE */
module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'daniela123',
    DB_NAME: process.env.DB_NAME || 'trailerflix',
    DB_PORT: process.env.DB_PORT || 3306,
    DIALECT: process.env.DB_DIALECT || 'mysql'
  }
}
