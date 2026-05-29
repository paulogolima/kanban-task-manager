import express from 'express'
import * as AtividadeController from '../controllers/AtividadeController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.get('/', autenticar, AtividadeController.listar)
router.post('/', autenticar, AtividadeController.criar)

export default router
