import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

const UserList = () => {
  return(
    <section className="card users-container">
      <Search />

      <Table />
  
      <Pagination />
    
  </section>
  );
}


export default UserList;