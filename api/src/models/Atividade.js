'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Atividade.belongsTo(models.User, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      Atividade.belongsTo(models.Quadro, { foreignKey: 'quadro_id', onDelete: 'CASCADE' });
      Atividade.belongsTo(models.Cartao, { foreignKey: 'cartao_id', onDelete: 'CASCADE' });
    }
  }
  Atividade.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    quadro_id: DataTypes.UUID,
    cartao_id: DataTypes.UUID,
    acao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detalhes: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Atividade',
    tableName: 'Atividades',
    timestamps: true,
    underscored: true
  });
  return Atividade;
};