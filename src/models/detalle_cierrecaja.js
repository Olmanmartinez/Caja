const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_cierrecaja', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idcierre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iddenominacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    detalle_aperturacaja_idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'detalle_aperturacaja',
        key: 'idregistro'
      }
    },
    denominacionmonedas_idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'denominacionmonedas',
        key: 'idregistro'
      }
    }
  }, {
    sequelize,
    tableName: 'detalle_cierrecaja',
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
        name: "fk_detalle_cierrecaja_detalle_aperturacaja1_idx",
        using: "BTREE",
        fields: [
          { name: "detalle_aperturacaja_idregistro" },
        ]
      },
      {
        name: "fk_detalle_cierrecaja_denominacionmonedas1_idx",
        using: "BTREE",
        fields: [
          { name: "denominacionmonedas_idregistro" },
        ]
      },
    ]
  });
};
