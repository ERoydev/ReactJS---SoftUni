import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then((response) => response.json())
            .then((data) => setTodos(Object.values(data)))
            .catch((err) => console.log(err))
    }, [])

    const onChangeStatusHandler = (todoId) => {
        setTodos(state => state.map(todo => todo._id === todoId ? {...todo, isCompleted: !todo.isCompleted } : todo))
    }


    return (
    <section className="todo-list-container">
          <h1>Todo List</h1>
          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* Loading spinner - show the load spinner when fetching the data from the server*/}
            {/* <div className="loading-container">
              <div className="loading-spinner">
                <span className="loading-spinner-text">Loading</span>
              </div>
            </div> */}

            <table className="table">
              <thead>
                <tr>
                  <th className="table-header-task">Task</th>
                  <th className="table-header-status">Status</th>
                  <th className="table-header-action">Action</th>
                </tr>
              </thead>
              <tbody>
                
                {todos.map(todo => (
                    <TodoItem 
                        key={todo._id}
                        _id={todo._id} 
                        text={todo.text} 
                        status={todo.isCompleted}
                        changeStatus={onChangeStatusHandler}
                    />
                ))}

              </tbody>
            </table>
          </div>
    </section>
    );
}