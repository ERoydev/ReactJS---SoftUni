import React from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import TodoList from './components/TodoList';
import TodoContext from './contexts/TodoContext';
import Header from './components/Header';


class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      todos: [],
      name: "Pesho"
    }

    this.toggleTodo = this.toggleTodo.bind(this);
  } 

  componentDidUpdate() {
    console.log(`${this.props.Label1} -- DId Update`)
  }

  componentDidMount () {
    console.log('Mounted');
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(result => {
        this.setState({
          todos: Object.values(result)
        })
      })
  }

  toggleTodo(todoId) {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === todoId ? {...todo,isCompleted: !todo.isCompleted} : todo)
    })
  }

  render() {
      return (
      <TodoContext.Provider value={{name: this.state.name, todo: this.state.todos}}>
        <Header />
        <h1>{this.state.name}</h1>

        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
      </TodoContext.Provider>

    );
  }
  
}

export default App
