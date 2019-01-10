import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
      task:'Click me to mark off the list',
      id: Date.now(),
      completed: false
  }
];
 

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: todoData,
      todoTask: ""
    }
  }
  
  handleChanges = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  addNewTodo = event => {
    event.preventDefault();
    this.setState({
      //Replace character array with new array using spread operator
      todoList: [
        ...this.state.todoList,
        { 
          task: this.state.todoTask,
          id: Date.now(),
          completed: false
        }
      ]
    },console.log(`Added new todo!`))   
  };

  handleClick = id => {
    console.log(`Clicked item with id: ${id}`);
    this.setState({
      todoList: this.state.todoList.map(todo => { 
          if(todo.id === id){
            return {
              ...todo,
              completed : !todo.completed
            }
          }
          return todo;
      })
    })
  }





  render() {
    return (
      <div>
        <TodoList 
        handleClick={this.handleClick} 
        todoList={this.state.todoList}/>
        <TodoForm 
        formData={this.todoTask} 
        handleChanges={this.handleChanges}
        addNewTodo={this.addNewTodo}
        />
      </div>
    );
  }
}

export default App;
