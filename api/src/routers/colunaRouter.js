import express from 'express'
import * as ColunaController from '../controllers/ColunaController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, ColunaController.criar)
router.get('/', autenticar, ColunaController.listar)
router.get('/:id', autenticar, ColunaController.obter)
router.put('/:id', autenticar, ColunaController.atualizar)
router.delete('/:id', autenticar, ColunaController.deletar)

export default router
