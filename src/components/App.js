import React, { Component } from 'react';
import Myform from './Myform';
import Navigation from './Navigation';
import Loaders from './Loader';
import './app.css';
import CustomerList from './CustomerList';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class App extends Component {
    state = {
        customers: [],
        customer: {},
        loader: false,
        url: "http://127.0.0.1:8000/api/customers"
    }


    getCustomers = () => {
        fetch(this.state.url)
        .then(response => {
            return response.json();
        })
        .then(customers => {
            this.setState({ customers });
        })
    };

    deleteCustomer = id => {
        fetch(`${this.state.url}/${id}` , {
            method: 'DELETE',
        }).then(response => response.json());
        this.getCustomers();
    }

    createCustomer =  data => {
        fetch(this.state.url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'post',
            body: JSON.stringify({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            })
        }).then(response => response.json());
        this.getCustomers();
    }

    editCustomer = data => {
        this.setState({ customer: {}, loader: true });
        fetch(`${this.state.url}/${data.id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'put',
            body: JSON.stringify({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            })
        }).then(response => response.json());
        this.getCustomers();
    }

    componentDidMount() {
        this.getCustomers();
    }

    onDelete = (id) => {
        //console.log("app ", id);
        this.deleteCustomer(id);
        this.getCustomers();
    };

    onEdit = data => {
        //console.log("app ", data);
        this.setState({customer: data});

    };

    onFormSubmit = data => {
        //console.log('app', data);
        if(data.isEdit) {
            // if is edit true
            this.editCustomer(data);
            this.getCustomers();
        }else {
            //if is edit false 
            this.createCustomer(data);
            this.getCustomers();

        }

    }

    render() {
        return(
            <div className="App">

                <Navigation title="Contacts"/>

                <div className="container">
                    <div className="row">
                        <Myform  
                            customer={this.state.customer}
                            onFormSubmit={this.onFormSubmit}    
                            />
                        {this.state.loader ? <Loaders /> : ""}
                        <CustomerList 
                            customers={this.state.customers}
                            onDelete={this.onDelete}
                            onEdit={this.onEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
