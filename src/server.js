import 'dotenv/config'
import express from 'express'
import conexao from './config/database.js'
import routes from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Testando conexão com banco de dados
const testarConexao = async () => {
  try {
    await conexao.authenticate()
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!')
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error)
    process.exit(1)
  }
}

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Tarefas está rodando!' })
})

// Rotas da API
app.use('/api', routes)

// Iniciando servidor
const iniciar = async () => {
  await testarConexao()
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
  })
}

iniciar().catch(erro => {
  console.error('Erro ao iniciar o servidor:', erro)
  process.exit(1)
})
