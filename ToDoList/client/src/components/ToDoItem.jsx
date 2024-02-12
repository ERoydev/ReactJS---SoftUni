

export default function TodoItem ({
    _id,
    text,
    status,
    changeStatus,
}) {

    const onChangeStatusClick = () => {
        changeStatus(_id);
    }

    return (
        <tr className={`todo${status ? ' is-completed': ''}`}>
            <td>{text}</td>
            <td>{status ? 'Completed' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={onChangeStatusClick} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}