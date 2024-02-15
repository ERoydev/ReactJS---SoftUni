const Search = ({
    onSearch,
}) => {

    const searchClickHandler = (e) => {
        e.preventDefault();
        const data = e.currentTarget.parentNode.querySelector('input[name="search"]').value;
        const selectField = e.currentTarget.parentNode.parentNode.querySelector('.filter select');
        const criteria = selectField.options[selectField.selectedIndex].textContent;

        onSearch(data, criteria);        
    }

    const closeClickHandler = (e) => {
        e.preventDefault();
        const inputField = e.currentTarget.parentNode.querySelector('input[name="search"]');
        inputField.value = '';
    }


    return (
        <form className="search-form">
            <h2>
            <i className="fa-solid fa-user"></i>
            <span>Users</span>
            </h2>
            <div className="search-input-container">
                <input type="text" placeholder="Please, select the search criteria" name="search" />
                <button className="btn close-btn" title="Refresh search bar" onClick={closeClickHandler}>
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <button className="btn" title="Please, select the search criteria" onClick={searchClickHandler}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

            <div className="filter">
                <span>Search Criteria:</span>
                <select name="criteria" className="criteria">
                    <option value="">Not selected</option>
                    <option value="">First Name</option>
                    <option value="">Last Name</option>
                    <option value="">Email</option>
                    <option value="">Phone</option>
                </select>
            </div>
      </form>
    );
}

export default Search