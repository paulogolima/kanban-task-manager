import helmet from 'helmet'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import usuarioRouter from './routers/usuarioRouter.js'
import quadroRouter from './routers/quadroRouter.js'
import colunaRouter from './routers/colunaRouter.js'
import cartaoRouter from './routers/cartaoRouter.js'
import etiquetaRouter from './routers/etiquetaRouter.js'
import comentarioRouter from './routers/comentarioRouter.js'
import atividadeRouter from './routers/atividadeRouter.js'

const app = express()

// Headers de segurança
app.use(helmet())

// CORS restrito
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}))

// Limitar tamanho de request
app.use(express.json({ limit: '10kb' }))

// Middleware de validação
app.use((req, res, next) => {
  // Validar tamanho de URL
  if (req.url.length > 2000) {
    return res.status(400).json({ erro: 'URL muito longa' })
  }
  next()
})

// Rotas
app.use('/api/usuarios', usuarioRouter)
app.use('/api/quadros', quadroRouter)
app.use('/api/colunas', colunaRouter)
app.use('/api/cartoes', cartaoRouter)
app.use('/api/etiquetas', etiquetaRouter)
app.use('/api/comentarios', comentarioRouter)
app.use('/api/atividades', atividadeRouter)

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' })
})

// Error handler global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err)
  res.status(err.status || 500).json({ 
    erro: 'Erro interno do servidor'
  })
})

export default app
