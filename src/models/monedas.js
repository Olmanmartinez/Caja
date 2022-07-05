const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monedas', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    simbolo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cambio: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    nacional: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'monedas',
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
    ]
  });
};
