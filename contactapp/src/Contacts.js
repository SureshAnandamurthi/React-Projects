import React, { Component } from 'react';
import ContactDetails from "./ContactDetails";
import ContactInfo from "./ContactInfo";
import Axios from 'axios';

class Contacts extends Component {
    state = {
        employees : [],
        employee : {}
    }

    showInfo = ((employee)=>{
        console.log(employee);
        this.setState({employee: employee})
        console.log("stored", this.state.employee)
    })
    componentDidMount = () =>{
        Axios("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response)=>{
            // console.log(response.data);
            this.setState({employees: response.data})
            // console.log(this.state.employees)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render() { 
        return <div>
            <h3>Contacts Component</h3>
            <div className="contair">
                <div className="row">
                    <div className="col md-8">
                        <ContactDetails employees={this.state.employees} showInfo={this.showInfo}/>
                    </div>
                    <div className="col md-4">
                        {(Object.keys(this.state.employee).length > 0)? <ContactInfo employeeInfo={this.state.employee} /> : null }
                    </div>
                    
                </div>
            </div>
        </div>;
    }
}
 
export default Contacts;