import { ListGroup, Button } from "react-bootstrap";

export default function TodoItem({
    _id,
    text,
    isCompleted,
    onTodoDeleteClick

}) {
    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    );  
}