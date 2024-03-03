import { ListGroup } from "react-bootstrap";

export default function TodoItem({
    text,
    isCompleted,

}) {
    return (
        <ListGroup.Item action>
            {text}
            {/* {isCompleted ? "Completed" : "Not Completed"} */}
        </ListGroup.Item>
    );  
}