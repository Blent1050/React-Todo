import React from 'react';
import Todo from './Todo';



function TodoList(props){
    return(
        props.todoList.map(todo =>{
            return <Todo handleClick={() => props.handleClick(todo.id)} key={todo.id} todoList={todo.task}/>
        })
    
    )
    
}


export default TodoList;