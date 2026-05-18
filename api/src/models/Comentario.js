'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comentario.belongsTo(models.Cartao, { foreignKey: 'cartao_id', onDelete: 'CASCADE' });
      Comentario.belongsTo(models.User, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
    }
  }
  Comentario.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    cartao_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Comentario',
    tableName: 'Comentarios',
    timestamps: true,
    underscored: true
  });
  return Comentario;
};