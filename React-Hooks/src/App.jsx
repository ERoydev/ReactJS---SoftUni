import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation"
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import AddTodoModal from './components/AddTodoModal';


const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(result => {
        setTodos(Object.values(result))
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Navigation />

      <TodoList todos={todos} />

      <AddTodoModal />
      
    </>
  )
}

export default App
