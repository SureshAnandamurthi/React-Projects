const Contacts = (props) => {
    const { articles } = props.articles;
    const data = articles.map((article, index)=>{
        // return (
        //     <div className="card" style="width: 18rem;">
        //         <img src="..." className="card-img-top" alt="..."/>
        //         <div className="card-body">
        //             <h5 className="card-title">{article.title}</h5>
        //             <p className="card-text">{article.description}</p>
        //             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //         </div>
        //     </div>
        // )
        return article.title
    })
    return (
        <pre>
            {/* {JSON.stringify(props.articles)} */}
            <div className="container">
                <div className="row">
                    <div className="col md-4">
                        {JSON.stringify(data)}
                    </div>
                </div>
            </div>
        </pre>
    )
}
export default Contacts;