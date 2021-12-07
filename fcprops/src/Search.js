import React from 'react';

const Search = (props) => {
    return (
        <div>
            <pre>{JSON.stringify(props.displaySearch)}</pre>
            <input type="search" name="search" onChange={props.displaySearch}></input>
        </div>
    )
}

export default Search
