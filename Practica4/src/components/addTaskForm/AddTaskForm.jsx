import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Ingresar tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Agregar tarea
      </Button>
    </Form>
  );
};

export default AddTaskForm;