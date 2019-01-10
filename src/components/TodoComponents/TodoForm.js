import React from 'react';

function TodoForm(props) {
  return (
    <div>
        <form>
        <input
            className='ui input focus'
            value={props.newTodoText}
            type="text"
            placeholder='enter todo...'
            onChange={props.handleChanges}
            name="newTodoText"
        />
        </form>
        <button className='positive ui button' onClick={props.addTodo}>Add Todo</button>
        <button className='negative ui button' onClick={props.removeTodo}>Clear Todos</button>
    </div>
  );
}

export default TodoForm;