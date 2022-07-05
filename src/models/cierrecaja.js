const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cierrecaja', {
    idregistro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    caja: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    apertura: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechahora: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    efectivoreal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    efectivosistema: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tarjetadevolucionreal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tarjetamontoreal: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tarjetamontosistema: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ventasefectivo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ventastarjeta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    egresos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    propina: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    descuento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    impuesto15: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    impuesto18: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    exento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fechacierre: {
      type: DataTypes.DATEONLY,
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
    tableName: 'cierrecaja',
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
        name: "fk_cierrecaja_aperturacaja_idx",
        using: "BTREE",
        fields: [
          { name: "aperturacaja_idregistro" },
        ]
      },
    ]
  });
};
