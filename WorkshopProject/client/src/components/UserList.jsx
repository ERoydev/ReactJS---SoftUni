import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";
import { useState } from "react";

const UserList = () => {
  const [criteria, assignCriteria] = useState(null);

  const searchDataHandler = (value) => {
    console.log(value)
  }

  const criteriaSelector = (selected) => {
    assignCriteria(selected)
  }

  return(
    <section className="card users-container">
      <Search 
        searchData={searchDataHandler}
        criteria={criteria}
        assignCriteria={assignCriteria}
      />

      <Table 
        criteriaSelector={criteriaSelector}
      />
  
      <Pagination />
    
  </section>
  );
}


export default UserList;