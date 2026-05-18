import express from 'express'
import * as EtiquetaController from '../controllers/EtiquetaController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, EtiquetaController.criar)
router.get('/', EtiquetaController.listar)
router.get('/:id', EtiquetaController.obter)
router.put('/:id', autenticar, EtiquetaController.atualizar)
router.delete('/:id', autenticar, EtiquetaController.deletar)

export default router
