import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import AddTodoModal from './components/AddTodoModal';

import { TodoContext } from './contexts/TodoContext.js';


const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(result => {
        setTodos(Object.values(result))
      })
      .catch(err => console.log(err))
  }, []);

  const onTodoAddSubmit = async (values) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })

    const result = await response.json();

    setTodos(state => [...state, result]);
    hideTodoModal();
  }

  const onTodoAddClick = () => {
    setShowAddTodo(true);

  }

  const hideTodoModal = () => {
    setShowAddTodo(false);
  }

  const onTodoDeleteClick = async (todoId) => {
    await fetch(`${baseUrl}/${todoId}`, {method: "DELETE"});

    setTodos(state => state.filter(x => x._id !== todoId));
  }

  const contextValue = {
    onTodoDeleteClick
  }

  return (
    <TodoContext.Provider value={contextValue}>
      
      <div>
        <Navigation />
        <TodoList
          todos={todos}
          onTodoAddClick={onTodoAddClick}

          />

        <AddTodoModal show={showAddTodo} hideModal={hideTodoModal} onTodoAddSubmit={onTodoAddSubmit}/>
      </div>

    </TodoContext.Provider>
  )
}

export default App
