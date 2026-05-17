import 'dotenv/config'
import app from './app.js'
import db from './models/index.js' // Nosso novo "DbContext"

const PORT = process.env.PORT || 3000

// Iniciando servidor
const iniciar = async () => {
  try {
    // Agora testamos a conexão através do nosso modelo centralizado
    await db.conexao.authenticate()
    console.log('✅ Conexão com o banco de dados e Models carregados com sucesso!')
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`)
    })
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados:', error)
    process.exit(1)
  }
}

iniciar()
