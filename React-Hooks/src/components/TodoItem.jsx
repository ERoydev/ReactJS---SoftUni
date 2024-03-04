import { ListGroup, Button } from "react-bootstrap";
import { useContext } from "react";

import { TodoContext } from "../contexts/TodoContext";

export default function TodoItem({
    _id,
    text,
    isCompleted,
}) {

    const { onTodoDeleteClick } = useContext(TodoContext);

    return (
        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>
    );  
}