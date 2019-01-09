import React from 'react';

function TodoForm(props) {
    return (
        <form>
            <input placeholder='...todo'/>
            <button>Add Todo</button>
            <button>Clear Todo</button>
        </form>
    )
}

export default TodoForm;