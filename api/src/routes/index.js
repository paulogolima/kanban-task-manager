/**
 * INSTRUÇÕES PARA ADICIONAR AO BACKEND
 * 
 * 1. Crie um arquivo: src/routes/index.js
 * 2. Adicione este conteúdo
 * 3. Importe no server.js: import routes from './routes/index.js'
 * 4. Use as rotas: app.use('/api', routes)
 */

import express from 'express';
import * as userController from '../controllers/userController.js';
import * as boardController from '../controllers/boardController.js';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();

// ============ ROTAS DE USUÁRIOS ============
router.post('/users', userController.createUser);
router.post('/users/login', userController.loginUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// ============ ROTAS DE QUADROS ============
router.post('/boards', boardController.createBoard);
router.get('/boards', boardController.getBoards);
router.get('/boards/:id', boardController.getBoardById);
router.put('/boards/:id', boardController.updateBoard);
router.delete('/boards/:id', boardController.deleteBoard);

// ============ ROTAS DE TAREFAS ============
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTask);
router.patch('/tasks/:id/status', taskController.updateTaskStatus);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
