import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoList: todoData,
      todoTask: ""
    }
  }

  handleChanges = event => {
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value});
  }
  addNewTodo = event => {
    console.log(event.target)
    event.preventDefault();
    this.setState({
      //Replace character array with new array using spread operator
      todoList: [
        ...this.state.todoList,
        { 
          task: this.state.todoTask,
        }
      ]
    })   
    console.log(this.state.todoTask)
  };

  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList}/>
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
