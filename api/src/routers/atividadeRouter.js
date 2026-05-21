import express from 'express'
import * as AtividadeController from '../controllers/AtividadeController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.get('/', AtividadeController.listar)
router.get('/:id', AtividadeController.obter)
router.get('/usuario/minhas-atividades', autenticar, AtividadeController.obterPorUsuario)

export default router
