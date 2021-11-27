import React, { Component } from "react";
import Card from "./Card";
class CardList extends Component {

    render(props){
        let { robots } = this.props;
        const cardArry = robots.map((ele, ind) =>{
            return(
                <Card key={ind} id={ele.id} username={ele.username} email={ele.email}/>
            ) 
        });
        return(
            <div>{cardArry}</div>
        );
    }

}

export default CardList