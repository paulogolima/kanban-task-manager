import express from 'express'
import * as QuadroController from '../controllers/QuadroController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, QuadroController.criar)
router.get('/', autenticar, QuadroController.listar)
router.get('/:id', autenticar, QuadroController.obter)
router.put('/:id', autenticar, QuadroController.atualizar)
router.delete('/:id', autenticar, QuadroController.deletar)

export default router
