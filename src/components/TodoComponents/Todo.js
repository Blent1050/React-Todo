import React from 'react';

function Todo(props) {
    return(
        <p className={`${props.addClass}`} onClick={props.handleClick}>{props.todoList}</p>
    )
}

export default Todo;