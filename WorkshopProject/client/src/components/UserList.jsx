import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

const UserList = () => {
  return(
    <section className="card users-container">
      <Search />

      <Table />
  
      <button className="btn-add btn">Add new user</button>

      <Pagination />
    
  </section>
  );
}


export default UserList;