import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Atividade extends Model {
    static associate(models) {
    }
  }
  Atividade.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Atividade',
    tableName: 'Atividades',
    timestamps: true,
    underscored: true
  })
  return Atividade
}