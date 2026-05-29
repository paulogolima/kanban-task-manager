import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Coluna extends Model {
    static associate(models) {
      Coluna.belongsTo(models.Quadro, { foreignKey: 'quadro_id', onDelete: 'CASCADE' })
      Coluna.hasMany(models.Cartao, { foreignKey: 'coluna_id', onDelete: 'CASCADE' })
    }
  }
  Coluna.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    quadro_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Coluna',
    tableName: 'Colunas',
    timestamps: true,
    underscored: true
  })
  return Coluna
}