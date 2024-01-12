import UserTableItem from "./UserTableItem";
import * as userApi from "../services/userApi";
import { useEffect, useState } from "react";
import CreateUserModal from "./createUserModal";
import UserDetailsModal from "./userDetailsModal";
import UserDeleteModal from "./UserDeleteModal";
import Spinner from "./Spinner";
import EditUserModal from "./EditUserModal";

export default function Table() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [userData, setUserData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    userApi.getAll()
      .then(result => setUsers(result))
      .catch(err => console.log(err)) 
      .finally(() => setIsLoading(false))
  }, []);

  const createUserClickHandler = () => {
    setShowCreate(true);
  };

  const hideCreateUserModal = () => {
    setShowCreate(false);
  };

  const userCreateHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const newUser = await userApi.create(data);

    setUsers(state => [...state, newUser]);
    setShowCreate(false);
  };

  const userShowDetailsClickHandler = async (userId) => {
    setSelectedUser(userId);
    setShowDetails(true);    
  };

  const userDeleteGetInfo = async (userId) => {
    setSelectedUser(userId);
    setShowDelete(true);
  }

  const userDeleteClickHandler = async () => {
    await userApi.deleteUser(selectedUser);

    setUsers(state => state.filter(user => user._id !== selectedUser));
    setShowDelete(false);
  }

  const editGetInfo = async (userId) => {
    setSelectedUser(userId);
    const data = await userApi.getOne(userId);
    setUserData(data);
    setShowEdit(true);
  }

  const editClickHandler = (e, newData) => {
    e.preventDefault();
    setShowEdit(false);
    setUserData(null);

    setUsers()

    console.log(users)
    console.log(newData._id)
  }


  return(
    <div className="table-wrapper">
      {
      showCreate && 
      (<CreateUserModal
          hideModal={hideCreateUserModal}
          onUserCreate={userCreateHandler}
       />)}

       {
       showDetails &&
       (<UserDetailsModal
          hideModal={() => setShowDetails(false)}
          userId={selectedUser}
          
        />
       )}

       {showDelete && (
        <UserDeleteModal 
          hideModal={() => setShowDelete(false)}
          deleteUser={userDeleteClickHandler}
          />
       )}

       {isLoading && (
        <Spinner />
       )}

       {showEdit && (
        <EditUserModal 
          hideModal={() => setShowEdit(false)}
          editUser={editClickHandler}
          user={userData}
          />
       )}

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
          {users.map(user => (
            <UserTableItem
              key={user._id} 
              {...user}
              userDetails={userShowDetailsClickHandler}
              deleteUser={userDeleteGetInfo}
              editUser={editGetInfo}
            />
          ))}
        </tbody>
      </table>

      <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>
    
    </div>
 

  );
}