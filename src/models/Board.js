import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Quadro extends Model {
    static associate(models) {
      Quadro.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'Usuario' });
      Quadro.hasMany(models.Tarefa, { foreignKey: 'idQuadro', as: 'Tarefas' });
    }
  }
  Quadro.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quadro',
    tableName: 'Quadros',
  });
  return Quadro;
};
