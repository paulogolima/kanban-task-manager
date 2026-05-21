import express from 'express'
import * as CartaoController from '../controllers/CartaoController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, CartaoController.criar)
router.get('/', CartaoController.listar)
router.get('/:id', CartaoController.obter)
router.put('/:id', autenticar, CartaoController.atualizar)
router.delete('/:id', autenticar, CartaoController.deletar)
router.post('/:id/responsaveis', autenticar, CartaoController.adicionarResponsavel)
router.post('/:id/etiquetas', autenticar, CartaoController.adicionarEtiqueta)

export default router
