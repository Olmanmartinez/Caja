const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denominacionmonedas', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    moneda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    denominacion: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    monedas_idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'monedas',
        key: 'idregistro'
      }
    }
  }, {
    sequelize,
    tableName: 'denominacionmonedas',
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
        name: "fk_denominacionmonedas_monedas1_idx",
        using: "BTREE",
        fields: [
          { name: "monedas_idregistro" },
        ]
      },
    ]
  });
};
