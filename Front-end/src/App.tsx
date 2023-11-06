import React, { useState, useEffect } from "react";
import { Button, Container, Flex, Input, Item, Spacer } from "./styles";
import api from "./services/api";

interface Task {
  id: number;
  description: string;
  checked: boolean;
}

function App() {
  const [task, setTask] = useState<string>("");
  const [listTask, setListTask] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(task);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setListTask(response.data);
    } catch (error) {
      console.error("Erro ao carregar as tarefas: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async () => {
    if (!task) {
      alert("Preencha uma tarefa");
      return;
    }
    try {
      await api.post("tasks", { description: task });
      setTask("");
      loadTasks();
    } catch (error) {
      console.error("Erro ao adicionar a tarefa: ", error);
    }
  };

  const toggleChecked = (id: number, checked: boolean) => {
    const index = listTask.findIndex((task) => task.id === id);
    if (index !== -1) {
      const newList = [...listTask];
      newList[index].checked = !checked;
      setListTask(newList);
    }
  };
  
  const deleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      const newList = listTask.filter((task) => task.id !== id);
      setListTask(newList);
    } catch (error) {
      console.error("Erro ao excluir a tarefa: ", error);
    }
  };

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />

      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="16px" />

      <ul>
        {listTask.map((task) => (
          <div key={task.id}>
            <Item checked={task.checked}>
              <p>{task.description}</p>
              <Flex direction="row">
                <button onClick={() => toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check"></i>
                </button>
                <button onClick={() => deleteTask(task.id)}>
                  <i className="bx bx-trash"></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="12px" />
          </div>
        ))}
      </ul>
    </Container>
  );
}

export default App;
