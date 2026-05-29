
import express from 'express';
import * as userController from '../controllers/userController.js';
import * as boardController from '../controllers/boardController.js';
import * as taskController from '../controllers/taskController.js';

const router = express.Router();


router.post('/users', userController.createUser);
router.post('/users/login', userController.loginUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);


router.post('/boards', boardController.createBoard);
router.get('/boards', boardController.getBoards);
router.get('/boards/:id', boardController.getBoardById);
router.put('/boards/:id', boardController.updateBoard);
router.delete('/boards/:id', boardController.deleteBoard);

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTask);
router.patch('/tasks/:id/status', taskController.updateTaskStatus);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
