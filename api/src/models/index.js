import Sequelize from 'sequelize'
import sequelize from '../config/database.js'
import Atividade from './Atividade.js'
import Cartao from './Cartao.js'
import Coluna from './Coluna.js'
import Comentario from './Comentario.js'
import Etiqueta from './Etiqueta.js'
import Quadro from './Quadro.js'
import User from './User.js'

const db = {}

const models = [
  Atividade(sequelize, Sequelize.DataTypes),
  Cartao(sequelize, Sequelize.DataTypes),
  Coluna(sequelize, Sequelize.DataTypes),
  Comentario(sequelize, Sequelize.DataTypes),
  Etiqueta(sequelize, Sequelize.DataTypes),
  Quadro(sequelize, Sequelize.DataTypes),
  User(sequelize, Sequelize.DataTypes)
]

// Primeiro: registrar todos os modelos
models.forEach(model => {
  db[model.name] = model
})

// Depois: configurar as associações
models.forEach(model => {
  if (model.associate) {
    model.associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
