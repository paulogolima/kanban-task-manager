import { Router } from 'express';
import { buscarTodos, criar } from '../controllers/UserController.js';

const router = Router();

// Mapeando as URLs para as funções do nosso Controller
router.get('/', buscarTodos);
router.post('/', criar);

export default router;