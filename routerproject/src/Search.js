const Search = (props)=>{
    return(
        <>
            <input type="search" onChange={props.displaySearch} name="searching"></input>
            <pre>{JSON.stringify(props.displaySearch)}</pre>
        </>
    )
}
export default Search;