import React, { Component } from 'react';

export default class Card extends Component{
    render(props){
        let {robots} = this.props;
        let robs = robots.map((element, index, array) => {
            return (
                <div key={element.id} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                    <img src={`https://robohash.org/${element.id}?set=set3?200x200`} alt="robots"/>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <p className="card-text">{element.email}</p>
                    </div>
                </div>
                // <div>
                //     <div>
                //         <img src={`https://robohash.org/${element.id}?200x200`} alt="robots"/>
                //     </div>
                //     <div>
                //         <h6>{element.name}</h6>
                //         <h6>{element.email}</h6>
                //     </div>
                // </div>
            )
        })
        return(
            <div>
            {/* <h6>{JSON.stringify(this.props.robots)}</h6>*/}
            {/* {JSON.stringify(robots)} */}
            {robs}
            </div>    
        )
    }
}

