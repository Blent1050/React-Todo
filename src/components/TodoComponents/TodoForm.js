import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input 
            placeholder='...todo'
            type='text'
            name="todoTask"
            onChange={props.handleChanges}
            />

            <button onClick={props.addNewTodo}>Add Todo</button>
            <button>Clear Todo</button>
        </form>
    )
}

export default TodoForm;