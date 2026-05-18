import app from './app.js'
import db from './models/index.js'

const PORT = process.env.PORT || 3000

db.sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
}).catch(erro => {
  console.error('Erro ao conectar ao banco:', erro)
  process.exit(1)
})
