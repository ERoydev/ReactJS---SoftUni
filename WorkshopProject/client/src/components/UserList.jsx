import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";

const UserList = () => {

  const searchDataHandler = (value) => {
    console.log(value)
  }

  return(
    <section className="card users-container">
      <Search 
        searchData={searchDataHandler}
      />

      <Table />
  
      <Pagination />
    
  </section>
  );
}


export default UserList;