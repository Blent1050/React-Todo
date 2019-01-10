import React from 'react';

function Todo(props) {
    return(
        <p className={props.completed ? 'completed' : 'not-completed'} onClick={() => props.handleClick(props.todoList.id)}>{props.todoList}</p>
    )
}

export default Todo;