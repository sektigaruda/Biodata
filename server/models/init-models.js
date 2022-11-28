import Sequelize from "sequelize";
import config from '../../config/config'

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_pasword,
  {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
)

const DataTypes = require("sequelize").DataTypes;
const _data_diri = require("./data_diri");

function initModels(sequelize) {
  const data_diri = _data_diri(sequelize, DataTypes);


  return {
    data_diri,
  };
}
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const models = initModels(sequelize);
export default models
export { sequelize }
