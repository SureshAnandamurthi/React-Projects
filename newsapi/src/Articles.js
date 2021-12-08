import React from 'react';

class Articles extends React.Component {
    // { newsArticles } = this.props;
    render() { 
        return <>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Decription</th>
                    <th scope="col">Source</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.newsArticles.map((article, index)=>{
                    return (
                    <tr key={index} onClick={this.props.getArticle.bind(this, article)}>
                    <td>{article.author}</td>
                    <td>{article.description}</td>
                    <td>{article.source.name}</td>
                    </tr>)})}
                </tbody>
            </table>
        </>;
    }
}
 
export default Articles;