import { useState } from 'react';
import { Container, Title } from '@mantine/core';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length, text: task, completed: false }
    ]);
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <Container size="xs">
      <Title
        style={{ textAlign: 'center' }}
        order={1}
      >
        Todo App
      </Title>

      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </Container>
  );
}

export default TodoApp;