import express from 'express'
import * as ComentarioController from '../controllers/ComentarioController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, ComentarioController.criar)
router.get('/', ComentarioController.listar)
router.get('/:id', ComentarioController.obter)
router.put('/:id', autenticar, ComentarioController.atualizar)
router.delete('/:id', autenticar, ComentarioController.deletar)

export default router
