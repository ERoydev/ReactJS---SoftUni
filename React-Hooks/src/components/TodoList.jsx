import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';
import Button from 'react-bootstrap/Button';

export default function TodoList ({
    todos,
    onTodoAddClick,
    onTodoDeleteClick,
}) {

    return (
        <div style={{width: '30%', margin: '10px auto'}}>
            <ListGroup style={{marginBottom: '10px'}}>
                {todos.map(x => <TodoItem onTodoDeleteClick={onTodoDeleteClick}
                key={x._id} {...x}/>)}
            </ListGroup>

            <Button variant="primary" onClick={onTodoAddClick}>Add Task</Button>{' '}

        </div>
  );
}