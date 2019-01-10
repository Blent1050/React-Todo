import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo toggleCompleted={props.toggleCompleted} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;