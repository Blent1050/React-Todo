import React from 'react';
import Todo from './Todo';



function TodoList(props){
    return(
        props.todoList.map(todo =>{
            return <Todo key={todo.id} todoList={todo.task}/>

        })
    )
}


export default TodoList;