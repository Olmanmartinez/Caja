const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cajas', {
    estacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechahora: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(45),
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
    tableName: 'cajas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "estacion" },
        ]
      },
      {
        name: "fk_cajas_cierrecaja1_idx",
        using: "BTREE",
        fields: [
          { name: "cierrecaja_idregistro" },
        ]
      },
    ]
  });
};
