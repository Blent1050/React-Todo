import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

const todoData = [
    {
        task:'Learn setState()',
        id: 1,
        completed: false
    },
    {
        task:'Style Todo LIST',
        id: 2,
        completed: false
    },
    {
        task:'Learn react',
        id: 3,
        completed: false
    }
];

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList: todoData,
            todoName: "",
        }
    }



    render(){
        return(
            <div className='todo-style'>
                <Todo todoData={this.state.todoList}/>
                <TodoForm/>
            </div>
        )
    }
}

export default TodoList;