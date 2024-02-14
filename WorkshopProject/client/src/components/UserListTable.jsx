import * as userApi from '../services/userApi.js';
import { useEffect, useState } from "react";

import UserListItem from "./UserListItem";
import CreateUser from "./CreateUser.jsx";
import UserDetails from './UserDetails.jsx';
import EditUser from './EditUser.jsx';
import DeleteUser from './DeleteUser.jsx';

const UserListTable = () => {
    const [users, setUsers] = useState([]);

    const [showDelete, setShowDelete] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    
    const [tempData, setTempData] = useState([]);


    useEffect(() => {
        userApi.getAll()
            .then(res => setUsers(res))
            .catch(err => console.log(err))
    }, []);


    // CREATE
    const showUserClickHandler = () => {
        setShowCreateModal(true);
    };

    const userCreateHandler = async (e) => {
        // Stop page from refreshing
        e.preventDefault();

        // Get data from form data
        const formData = new FormData(e.target);
        
        // Create new user at the server
        const data = await userApi.createUser(formData);
        
        // Add newly created user to the local state to prerender
        setUsers(oldState => [...oldState, data])

        // Close the modal
        setShowCreateModal(false);
    };

    // GET
    const showDetailsClickHandler = async (_id) => {
        const data = await userApi.getOne(_id);

        setTempData(data);
        setShowDetailsModal(true);
    };

    // EDIT
    const showEditClickHandler = (_id) => {
        const data = users.filter((user) => user._id === _id)[0];
        
        setTempData({...data, _id: _id});
        setShowEditModal(true);
    };
    
    const editUserHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {_id: tempData._id, ...Object.fromEntries(formData.entries())}
        
        userApi.editUser(data, data._id)
        // const user = Object.values(users).find(usr => usr._id === data._id)
        // const result = {...user, ...data};

        console.log(users)
        setShowEditModal(false);
    }
    
    // DELETE
    const showDeleteClickHandler = (_id) => {
        setTempData(_id)
        setShowDelete(true);
    }

    const deleteUserHandler = async () => {
        // Remove user from server
        const result = await userApi.deleteUser(tempData);
        
        // Remove user from state
        setUsers(state => state.filter(user => user._id !== tempData));
        
        // Close the delete modal
        setShowDelete(false);
    }
    
    return (
        <>

            {showDelete && <DeleteUser 
                hideModal={() => setShowDelete(false)}    
                onDelete={deleteUserHandler}
            />}

            {showEditModal && <EditUser 
                hideModal={() => setShowEditModal(false)}
                editUserHandler={editUserHandler}
                data={tempData}
            />}

            {showCreateModal && <CreateUser
                hideModal={() => setShowCreateModal(false)}
                onUserCreate={userCreateHandler} 
            />}

            {showDetailsModal && <UserDetails 
                hideModal={() => setShowDetailsModal(false)}
                data={tempData}
                />}
            
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>
                        First name
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            >
                            <path
                            fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                        </th>
                        <th>
                        Last name
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                        </th>
                        <th>
                        Email
                        <svg
                            className="icon"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                        </th>
                        <th>
                        Phone
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                        </th>
                        <th>
                        Created
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="arrow-down"
                            className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                            fill="currentColor"
                            d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                            ></path>
                        </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {users.map(user =>
                            <UserListItem 
                                key={user._id} 
                                {...user} 
                                showDetails={showDetailsClickHandler}
                                showEdit={showEditClickHandler}
                                showDelete={showDeleteClickHandler}
                            />)}
                    </tbody>
                </table>

                <button className="btn-add btn" onClick={showUserClickHandler}>Add new user</button>
            
            </div>

        </>
    );
}

export default UserListTable