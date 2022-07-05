const { Sequelize } = require("sequelize");
const initModels = require("./init-models") 

const sequelize = new Sequelize(process.env.DATABASE_URL)

module.exports = initModels(sequelize)
