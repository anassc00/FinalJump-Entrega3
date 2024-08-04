module.exports = {
  PORT: process.env.PORT || "3000",

  db: {
    HOST: process.env.HOST || "localhost",
    USERNAME: process.env.USERNAME || "root",
    PASSWORD: process.env.PASSWORD || "Daniela123",
    PORT: process.env.PORT || "3306",
    DIALECT: process.env.DIALECT || "mysql",
    NAME: process.env.NAME || "trailerfix",
  },
};
