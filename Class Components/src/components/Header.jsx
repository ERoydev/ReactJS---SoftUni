import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import TodoContext from '../contexts/TodoContext';

export default class Header extends React.Component {
    render() {

        const items = [
        {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                {
                    label: 'Option 1',
                    key: 'setting:1',
                },
                {
                    label: 'Option 2',
                    key: 'setting:2',
                },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                {
                    label: 'Option 3',
                    key: 'setting:3',
                },
                {
                    label: 'Option 4',
                    key: 'setting:4',
                },
                ],
            },
            ],
        },
        {
            label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
            ),
            key: 'alipay',
        },
        ];

        return (
            <TodoContext.Consumer>
                {({name}) => {
                    <>
                        <Menu mode="horizontal" items={items} />
                        <h3>{name}</h3>
                    </>

                }}
            </TodoContext.Consumer>
        )
    }
}