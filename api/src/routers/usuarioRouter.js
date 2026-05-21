import express from 'express'
import * as UserController from '../controllers/UserController.js'

const router = express.Router()

router.post('/registrar', UserController.criar)
router.post('/login', UserController.login)
router.get('/', UserController.listar)
router.get('/:id', UserController.obter)
router.put('/:id', UserController.atualizar)
router.delete('/:id', UserController.deletar)

export default router
