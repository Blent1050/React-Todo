import React from 'react';

function Todo(props) {
    return(
        <div>
            {props.todoData.map(todo => {
                return <div>{todo.task}</div>
            })}
        </div>
    )
}

export default Todo;