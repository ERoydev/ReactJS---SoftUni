export default function ToDoItem({text, isCompleted}) {
  return(
    <tr className={`todo${isCompleted ? ` is-completed`: ''}`}>
        <td>{text}</td>
        <td>{`${isCompleted ? 'Completed': 'Not Completed'}`}</td>
        <td className="todo-action">
          <button className="btn todo-btn">Change status</button>
        </td>
      </tr>
  );
}