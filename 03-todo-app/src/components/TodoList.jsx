import { Stack, Checkbox, Paper, Button, Group } from '@mantine/core';

function TodoList({ tasks, toggleTask, removeTask }) {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="flex-start"
      gap="sm"
      style={{ marginTop: 20 }}
    >
      {tasks.map((task) => (
        <Paper 
          key={task.id}
          shadow="sm" 
          radius="md" 
          withBorder 
          p="sm"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Group style={{ flex: 1 }}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              label={task.text}
              color="pink"
              radius="xl"
              style={{ flex: 2 }}
            />
            <Button 
              variant="filled" 
              color="pink"
              radius="lg"
              onClick={() => removeTask(task.id)}
            >
              Delete
            </Button>  
          </Group>
        </Paper>
      ))}
    </Stack>
  );
}

export default TodoList;