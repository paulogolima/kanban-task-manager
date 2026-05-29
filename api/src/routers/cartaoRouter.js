import express from 'express'
import * as CartaoController from '../controllers/CartaoController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, CartaoController.criar)
router.get('/', autenticar, CartaoController.listar)
router.get('/:id', autenticar, CartaoController.obter)
router.put('/:id', autenticar, CartaoController.atualizar)
router.delete('/:id', autenticar, CartaoController.deletar)

export default router
