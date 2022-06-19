import React from "react";

const SearchBar = ({searchTerm, handleInput}) => {
    return (
        <form action="#">
            <input type="search" name="search" id="search" placeholder='Type in to search movies' autoComplete='name' value={searchTerm} onInput={handleInput} autoFocus required />
        </form>
    )
}

export default SearchBar