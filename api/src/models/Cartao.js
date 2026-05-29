import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Cartao extends Model {
    static associate(models) {
      Cartao.belongsTo(models.Coluna, { foreignKey: 'coluna_id', onDelete: 'CASCADE' })
      Cartao.hasMany(models.Comentario, { foreignKey: 'cartao_id', onDelete: 'CASCADE' })
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
    }
  }, {
    sequelize,
    modelName: 'Cartao',
    tableName: 'Cartaos',
    timestamps: true,
    underscored: true
  })
  return Cartao
}