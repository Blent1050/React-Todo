import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo key={todo.id} toggleCompleted={props.toggleCompleted} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;