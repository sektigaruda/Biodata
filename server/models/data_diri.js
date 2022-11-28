const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_diri', {
    id_data: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url_enpoint: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nama: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    ttl: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    usia: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    wa: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    kota: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    pendidikan: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'data_diri',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "data_diri_pkey",
        unique: true,
        fields: [
          { name: "id_data" },
        ]
      },
    ]
  });
};
