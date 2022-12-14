import React, { useState } from "react";

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    function handleChange(formEvent){
        formEvent.preventDefault();
        props.getAllSearchSongs(search);
    }

    return ( 
        <form onSubmit={handleChange}>
            <label className="formlabel">Search For Song</label>
            <input className="formlabel" type='string' value={search} onChange={(event) => setSearch(event.target.value)} />
            <input type='submit' value='Submit' />
        </form>
     );
}
 
export default SearchBar;