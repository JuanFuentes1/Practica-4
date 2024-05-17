import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ListGroup className="mt-3">
      {tasks.map(task => (
        <ListGroup.Item
          key={task.id}
          style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          onClick={() => toggleTaskCompletion(task.id)}
        >
          {task.text}
          <span style={{ cursor: 'pointer' }} onClick={() => deleteTask(task.id)}></span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;
