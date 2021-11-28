import React, { Component} from "react";

class Card extends Component{
    render(props){
        let {id, name, username, email} = this.props;
        return(
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <div>
                    <img src={`https://robohash.org/${id}?150x150`} alt="rob"></img>
                </div>
                <div className="tc">
                    <h6>{name}</h6>
                    <h6>{username}</h6>
                    <h6>{email}</h6>
                </div>
            </div>
        )
    }
}
// const Card = () => {
//     return (
//         <div>
//             <h6>Hellow</h6>
//         </div>
//     )
// }
export default Card;