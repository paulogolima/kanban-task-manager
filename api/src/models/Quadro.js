import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Quadro extends Model {
    static associate(models) {
      Quadro.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' })
      Quadro.hasMany(models.Coluna, { foreignKey: 'quadro_id', onDelete: 'CASCADE' })
      Quadro.hasMany(models.Atividade, { foreignKey: 'quadro_id', onDelete: 'CASCADE' })
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
    }
  }, {
    sequelize,
    modelName: 'Quadro',
    tableName: 'Quadros',
    timestamps: true,
    underscored: true
  })
  return Quadro
}