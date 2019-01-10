import React from 'react';
import './Todo.css'

function Todo(props) {
  const { toggleCompleted, todo } = props;

  return (
    <p className={todo.completed ? 'completed' : null} onClick={() => toggleCompleted(todo.id)}>
      {todo.task}
    </p>
  );
}

export default Todo;
