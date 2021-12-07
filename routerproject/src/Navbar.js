import { Link } from "react-router-dom";

const handler1 = (event)=>{
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.name);
};

const Navbar = (props)=>{
    return (
        <>
            <pre>{JSON.stringify(props.handler)}</pre>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/ ">Suresh Anandamurthi</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.displaySearch}/>
                        <button className="btn btn-outline-success" type="submit" name="search">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
            <pre>{JSON.stringify(props.displaySearch)}</pre>
        </>
    )
}

export default Navbar;