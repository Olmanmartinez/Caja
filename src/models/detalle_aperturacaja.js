const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('detalle_aperturacaja', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idapertura: {
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
    aperturacaja_idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'aperturacaja',
        key: 'idregistro'
      }
    }
  }, {
    sequelize,
    tableName: 'detalle_aperturacaja',
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
        name: "fk_detalle_aperturacaja_aperturacaja1_idx",
        using: "BTREE",
        fields: [
          { name: "aperturacaja_idregistro" },
        ]
      },
    ]
  });
};
