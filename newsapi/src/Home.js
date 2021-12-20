import React from 'react';
import Axios from "axios";
import Articles from "./Articles";
import ArticleInfo from "./ArticleInfo";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsArticles: [],
            selectedArticle: {},
            search : ""
        }
    }
    updateSearch = ()=>{
        this.setState({search: this.props.search})
    }
    showArticle = ((article)=>{
        console.log(article);
        this.setState({selectedArticle : article});
        console.log(this.state.selectedArticle);
    })

    componentDidMount = ()=>{
        Axios("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=30ec56c98e3b446e8851415adac15149&page=1")
        .then((response)=>{
            // console.log(response.data.articles);
            this.setState({newsArticles: response.data.articles})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render() { 
        return <div>
            <h3>Home Component</h3>
            <pre>{JSON.stringify(this.state.search)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col md-8">
                        <Articles newsArticles={this.state.newsArticles} getArticle={this.showArticle}/>
                    </div>
                    <div className="col md-4">
                        {(Object.keys(this.state.selectedArticle).length>0)? <> <h3>Article Info</h3> <ArticleInfo selectedArticle={this.state.selectedArticle}/> </> :null}                    
                        {/* <h3>Article Info</h3> 
                        <ArticleInfo selectedArticle={this.state.selectedArticle}/> */}
                    </div>
                </div>
            </div>
        </div>;
    }
}
 
export default Home;