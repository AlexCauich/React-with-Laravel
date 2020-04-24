import React, { Component } from 'react';

class Customer extends Component {

    onDelete = () => {
       // console.log("customer on delete");
       this.props.onDelete(this.props.customer.id);
    }

    onEdit = () => {
        //console.log("customers on edit");
        this.props.onEdit(this.props.customer);
    }

    render() {
        const { id, first_name, last_name, email } = this.props.customer;
        return (
            <tr>
                <td  className="table-dark"> {id} </td>
                <td> {`${first_name} ${last_name}`} </td>
                <td> {email} </td>
                <td> 
                    <button className="btn btn-outline-warning mt-2 ml-2" onClick={this.onEdit}>Edit</button>
                    <button className="btn btn-outline-danger mt-2 ml-2" onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Customer;