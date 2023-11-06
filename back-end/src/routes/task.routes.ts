import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskController = new TaskController();
const router = Router();

router.post('/', taskController.createTask);
router.get("/", taskController.listTask)
router.delete('/:taskId', taskController.deleteTask);
export default router;
