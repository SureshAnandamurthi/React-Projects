import React, { Component } from 'react'
class ContactDetails extends Component {

    new_employee = this.props.employees.map((employee)=>{
        return (
            <tr>
                <td>{employee.name.first}</td>
                <td>{employee.gender}</td>
                <td>{employee.email}</td>
            </tr>
        );
    })
    render(props) { 
        return <div>
            <h5>Employees List</h5>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.employees.map((employee, index)=>{
                                    return (
                                        <tr onMouseOver={this.props.showInfo.bind(this, employee)} key={index}>
                                            <td>{employee.name.first}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.email}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <pre>{JSON.stringify(this.props.employees)}</pre> */}
        </div>;
    }
}
 
export default ContactDetails;