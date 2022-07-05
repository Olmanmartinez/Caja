const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detallecierrecajapos', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcierre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idtipos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    devolucion: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    cierrecaja_idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cierrecaja',
        key: 'idregistro'
      }
    }
  }, {
    sequelize,
    tableName: 'detallecierrecajapos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idregistro" },
        ]
      },
      {
        name: "fk_detallecierrecajapos_cierrecaja1_idx",
        using: "BTREE",
        fields: [
          { name: "cierrecaja_idregistro" },
        ]
      },
    ]
  });
};
