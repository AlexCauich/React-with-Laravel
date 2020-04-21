import React, { Component } from 'react';
import Customer from './Customer';
 
class CustomerList extends Component {
    onDelete = id => {
        //console.log("customer list ", id);
        this.props.onDelete(id);
    }
    onEdit = data => {
        this.props.onEdit(data);
        //console.log("customer list ", id);
    }
    render() {
        const customers = this.props.customers;
        return(
            <div className="col-md-8 col-sm-8 col-xs-8">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => {
                                    return <Customer 
                                        customer={customer} 
                                        key={customer.id} 
                                        onDelete={this.onDelete}
                                        onEdit={this.onEdit}
                                    />;
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CustomerList;