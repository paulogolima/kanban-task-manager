import express from 'express'
import * as UserController from '../controllers/UserController.js'
import { autenticar } from '../middleware/autenticacao.js'

const router = express.Router()

router.post('/registrar', UserController.registrar)
router.post('/login', UserController.login)
router.get('/', autenticar, UserController.listar)
router.get('/:id', autenticar, UserController.obter)
router.put('/:id', autenticar, UserController.atualizar)
router.delete('/:id', autenticar, UserController.deletar)

export default router
