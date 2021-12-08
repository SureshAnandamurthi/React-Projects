import React from 'react';

class ArticleInfo extends React.Component {
    render(props) { 
        const {selectedArticle} = this.props;
        return (<>
        <h3>SubComp</h3>
        {/* <pre>{JSON.stringify(selectedArticle)}</pre> */}
        <div className="card mb-3 sticky-top" style={{"max-width": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={selectedArticle.urlToImage} className="img-fluid rounded-start" alt={selectedArticle.urlToImage}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{selectedArticle.title}</h5>
                    <p className="card-text">{selectedArticle.description}</p>
                    <p className="card-text"><small className="text-muted">{`Last updated on ${selectedArticle.publishedAt}`}</small></p>
                </div>
                </div>
            </div>
        </div>
        </>)
    }
}
 
export default ArticleInfo;