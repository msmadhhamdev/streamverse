import React, { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInput = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <form action="#">
            <input type="search" name="search" id="search" placeholder='Type in to search movies' autoComplete='name' value={searchTerm} onInput={handleInput} autoFocus required />
        </form>
    )
}

export default SearchBar