import React from 'react';
import TodoListItem from './TodoListItem';
import { Space } from 'antd';


export default class TodoList extends React.Component {
    render() {

        return (
            <>  
                <Space direction='vertical' size={16}>
                    {this.props.todos.map(todo => <TodoListItem key={todo.id} {...todo} toggleTodo={this.props.toggleTodo}/>)}
                </Space>
            </>
        );
    }
}