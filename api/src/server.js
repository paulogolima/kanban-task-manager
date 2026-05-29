import helmet from 'helmet'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import db from './models/index.js'
import usuarioRouter from './routers/usuarioRouter.js'
import quadroRouter from './routers/quadroRouter.js'
import colunaRouter from './routers/colunaRouter.js'
import cartaoRouter from './routers/cartaoRouter.js'
import etiquetaRouter from './routers/etiquetaRouter.js'
import comentarioRouter from './routers/comentarioRouter.js'
import atividadeRouter from './routers/atividadeRouter.js'

const app = express()
const PORT = process.env.PORT || 3000

<<<<<<< HEAD
db.sequelize.sync({ alter: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
  })
}).catch(erro => {
  console.error('Erro ao conectar ao banco:', erro)
  process.exit(1)
=======
app.use(helmet())
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000', credentials: true }))
app.use(express.json({ limit: '10kb' }))

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
>>>>>>> 8e28eb9 (Atualização de estrutura da API)
})

app.use('/api/usuarios', usuarioRouter)
app.use('/api/quadros', quadroRouter)
app.use('/api/colunas', colunaRouter)
app.use('/api/cartoes', cartaoRouter)
app.use('/api/etiquetas', etiquetaRouter)
app.use('/api/comentarios', comentarioRouter)
app.use('/api/atividades', atividadeRouter)

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ erro: err.message || 'Erro interno' })
})

db.sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados')
    return db.sequelize.sync()
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}/api`)
    })
  })
  .catch(erro => {
    console.error('Erro:', erro.message)
    process.exit(1)
  })
