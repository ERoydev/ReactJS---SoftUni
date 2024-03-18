import React from 'react';
import { Button, Card } from 'antd';

export default class TodoListItem extends React.Component {
    render() {
        return (
        <Card
            title={this.props.Label1}
            style={{
                width: 300,
                backgroundColor: this.props.isCompleted ? 'red' : 'green',
            }}

            >
            <p>{this.props.isCompleted ? 'Completed' : 'Pending'}</p>

            <Button type='primary' onClick={() => this.props.toggleTodo(this.props.id)}>{this.props.isCompleted ? 'Undo' : 'Done'}</Button>
        </Card>
        );
    }
}