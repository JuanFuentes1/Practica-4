import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TaskList from './components/taskList/TaskList';
import AddTaskForm from './components/addTaskForm/AddTaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={7}>
          <h1>Administrador de tareas personales</h1>
          <AddTaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
          <Button variant="danger" onClick={deleteCompletedTasks} className="mt-3">
            Eliminar tareas completadas
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;