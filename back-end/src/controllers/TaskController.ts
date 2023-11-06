import { Request, Response } from 'express';
import Tasks from "../db/models/tasks.model"

class TaskController {
  async createTask(req: Request, res: Response): Promise<void> {
    try {
      
      const { description } = req.body;
      
      const hasTask = await Tasks.findOne({where: {description}})
     
      if (hasTask) {
        res.status(400).json({ error: 'Esta tarefa já existe.' });
        return;
      }
      
  
      const task = await Tasks.create({description})

      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
  }
  

  async listTask(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await Tasks.findAll()
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao listar as tarefas' });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const { taskId } = req.params;

      // Verifica se a tarefa existe antes de tentar excluí-la
      const task = await Tasks.findByPk(taskId);

      if (!task) {
         res.status(404).json({ error: 'Tarefa não encontrada.' });
         return
      }

      // Exclui a tarefa
      await task.destroy();

      res.status(204).end(); // Responde com sucesso sem conteúdo
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir a tarefa' });
    }
  }
  
}

export default TaskController;
