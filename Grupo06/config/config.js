const dotenv = require('dotenv');
dotenv.config();

/* DATABASE */
module.exports = {
  PORT: process.env.PORT || 3001,
  DATABASE: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
<<<<<<< HEAD
    DB_PASSWORD: process.env.DB_PASSWORD || 'limon445',
=======
    DB_PASSWORD: process.env.DB_PASSWORD || 'mysql1234',
>>>>>>> 1eaa125c55830e1126591a897d97a1394f7b8548
    DB_NAME: process.env.DB_NAME || 'trailerflix',
    DB_PORT: process.env.DB_PORT || 3306,
    DIALECT: process.env.DB_DIALECT || 'mysql'
  }
}
