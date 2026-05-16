

import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Tarefa, { foreignKey: 'idUsuario', as: 'Tarefas' });
      Usuario.hasMany(models.Quadro, { foreignKey: 'idUsuario', as: 'Quadros' });
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
