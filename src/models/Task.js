import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Tarefa extends Model {
    static associate(models) {
      Tarefa.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'Usuario' });
      Tarefa.belongsTo(models.Quadro, { foreignKey: 'idQuadro', as: 'Quadro' });
    }
  }
  Tarefa.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    status: DataTypes.STRING,
    prioridade: DataTypes.STRING,
    dataVencimento: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER,
    idQuadro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tarefa',
  });
  return Tarefa;
};
