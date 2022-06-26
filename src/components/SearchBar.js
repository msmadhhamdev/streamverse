import React from "react";
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({searchTerm, handleInput}) => {
    return (
        <form action="#">
            <input type="search" role='searchbox' name="search" id="search" placeholder='Type in to search movies' autoComplete='name' value={searchTerm} onInput={handleInput} autoFocus required />
            <label htmlFor="search">
                <FaSearch style={{color: '#fff', fontSize: '1.3em'}} />
            </label>
        </form>
    )
}

export default SearchBar