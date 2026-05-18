'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Etiqueta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Etiqueta.belongsTo(models.Quadro, { foreignKey: 'quadro_id', onDelete: 'CASCADE' });
      Etiqueta.belongsToMany(models.Cartao, {
        through: 'cartao_etiqueta',
        foreignKey: 'etiqueta_id',
        otherKey: 'cartao_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Etiqueta.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    quadro_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Etiqueta',
    tableName: 'Etiqueta',
    timestamps: true,
    underscored: true
  });
  return Etiqueta;
};