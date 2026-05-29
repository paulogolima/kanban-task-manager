import express from 'express'
import * as EtiquetaController from '../controllers/EtiquetaController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/', autenticar, EtiquetaController.criar)
router.get('/', autenticar, EtiquetaController.listar)
router.get('/:id', autenticar, EtiquetaController.obter)
router.delete('/:id', autenticar, EtiquetaController.deletar)

export default router
