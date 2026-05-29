import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Atividade extends Model {
    static associate(models) {
      Atividade.belongsTo(models.User, { foreignKey: 'usuario_id', onDelete: 'CASCADE' })
      Atividade.belongsTo(models.Quadro, { foreignKey: 'quadro_id', onDelete: 'CASCADE' })
      Atividade.belongsTo(models.Cartao, { foreignKey: 'cartao_id', onDelete: 'CASCADE' })
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
    quadro_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cartao_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    acao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detalhes: {
      type: DataTypes.JSON,
      allowNull: true
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