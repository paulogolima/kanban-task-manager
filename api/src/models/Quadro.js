'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Quadro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quadro.belongsTo(models.User, { foreignKey: 'user_id', as: 'criador', onDelete: 'CASCADE' });
      Quadro.hasMany(models.Coluna, { foreignKey: 'quadro_id', onDelete: 'CASCADE' });
      Quadro.hasMany(models.Etiqueta, { foreignKey: 'quadro_id', onDelete: 'CASCADE' });
      Quadro.hasMany(models.Atividade, { foreignKey: 'quadro_id', onDelete: 'CASCADE' });
      Quadro.belongsToMany(models.User, {
        through: 'usuario_quadro',
        foreignKey: 'quadro_id',
        otherKey: 'usuario_id',
        as: 'participantes',
        onDelete: 'CASCADE'
      });
    }
  }
  Quadro.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Quadro',
    tableName: 'Quadros',
    timestamps: true,
    underscored: true
  });
  return Quadro;
};