import { useState } from 'react';
import Search from './Search';
import UserListTable from './UserListTable';

const UserList = () => {
    const [search, setSearch] = useState([]);

    const onSearch = (data, searchCriteria) => {
        setSearch([data, searchCriteria])
    }

    return (
        <section className="card users-container">
            <Search 
                onSearch={onSearch}
            />

            <UserListTable 
                search={search}
            />
        </section>
    );
}

export default UserList