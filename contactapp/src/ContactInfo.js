import React, { Component } from 'react'

class ContactInfo extends Component {
    render(props) { 
        return <div>
            <h3>Employee Info</h3>
            <h4>{JSON.stringify(this.props.employeeInfo.name.first)}</h4>
            <div className="card" style={{width: "18rem"}}>
                <img src={`${this.props.employeeInfo.picture.medium}`} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.employeeInfo.name.first}</h5>
                    <p className="card-text">{this.props.employeeInfo.location.country}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>;
    }
}
 
export default ContactInfo;