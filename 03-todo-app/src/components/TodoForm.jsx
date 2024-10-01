import { Button, TextInput, Group } from '@mantine/core';
import { useField } from '@mantine/form';

function TodoForm({ addTask }) {
  const field = useField({
    initialValue: '',
    validate: (value) => value.trim() !== '' ? addTask(value) : "Task cannot be empty",
  });

  return (
    <Group position="apart">
      <TextInput
        {...field.getInputProps()}
        placeholder="Add a new task"
        mb="md"
        style={{ flex: 1, marginTop: 17 }}
      />
      <Button 
        variant="filled" 
        color="pink"
        radius="lg"
        onClick={field.validate}
      >
        Add Task
      </Button>
    </Group>
  );
}

export default TodoForm;