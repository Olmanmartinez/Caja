const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estaciones', {
    NumeroEstacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vistaprevia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tecladovirtual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombretipo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombreproducto: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NumeroEstacion" },
        ]
      },
    ]
  });
};
