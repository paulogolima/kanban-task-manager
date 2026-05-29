import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Etiqueta extends Model {
    static associate(models) {
    }
  }
  Etiqueta.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Etiqueta',
    tableName: 'Etiqueta',
    timestamps: true,
    underscored: true
  })
  return Etiqueta
}