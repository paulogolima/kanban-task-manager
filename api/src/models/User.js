'use strict';
import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Quadro, { foreignKey: 'user_id', as: 'quadrosCriados', onDelete: 'CASCADE' });
      User.hasMany(models.Comentario, { foreignKey: 'usuario_id', onDelete: 'CASCADE' });
      User.belongsToMany(models.Quadro, {
        through: 'usuario_quadro',
        foreignKey: 'usuario_id',
        otherKey: 'quadro_id',
        as: 'quadrosParticipados',
        onDelete: 'CASCADE'
      });
      User.belongsToMany(models.Cartao, {
        through: 'cartao_usuario',
        foreignKey: 'usuario_id',
        otherKey: 'cartao_id',
        as: 'cartoes',
        onDelete: 'CASCADE'
      });
    }
  }
  User.init({
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Formato de email inválido."
          },
        },
        set(value) {
          this.setDataValue('email', value.toLowerCase())
        },
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    underscored: true,
  });
  return User;
};