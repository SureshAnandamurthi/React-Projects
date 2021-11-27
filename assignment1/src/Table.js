import react, { Component } from "react";

class Table extends Component{

    render(props){
        // let data = this.props.robs.map((ele, ind)=>{
        //     return (
        //         <tr>
        //             <td>{ele.id}</td>
        //             <td>{ele.name}</td>
        //             <td>{ele.username}</td>
        //             <td>{ele.email}</td>
        //         </tr>
        //     )
        // })
        let robs = this.props.robs;
        let data = [];
        for (let r of robs){
            data.push(<tr>
                        <td>{r.id}</td>
                        <td>{r.name}</td>
                        <td>{r.username}</td>
                        <td>{r.email}</td>
                        </tr>)
            console.log(r.id)
            console.log(r.email)
        }

        return (
            <div>
                <table border="1">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>email</th>
                    </thead>
                    <tbody>
                    {data}
                    </tbody>
                </table>
                {/* {JSON.stringify(robs)} */}
                
            </div>
        )
    }

}

export default Table;