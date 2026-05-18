'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Cartao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cartao.belongsTo(models.Coluna, { foreignKey: 'coluna_id', onDelete: 'CASCADE' });
      Cartao.hasMany(models.Comentario, { foreignKey: 'cartao_id', onDelete: 'CASCADE' });
      Cartao.belongsToMany(models.Etiqueta, {
        through: 'cartao_etiqueta',
        foreignKey: 'cartao_id',
        otherKey: 'etiqueta_id',
        onDelete: 'CASCADE'
      });
      Cartao.belongsToMany(models.User, {
        through: 'cartao_usuario',
        foreignKey: 'cartao_id',
        otherKey: 'usuario_id',
        as: 'responsaveis',
        onDelete: 'CASCADE'
      });
    }
  }
  Cartao.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    coluna_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: DataTypes.TEXT,
    prioridade: {
      type: DataTypes.ENUM('baixa', 'média', 'alta', 'crítica')
    },
    prazo: DataTypes.DATE,
    posicao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cartao',
    tableName: 'Cartaos',
    timestamps: true,
    underscored: true
  });
  return Cartao;
};