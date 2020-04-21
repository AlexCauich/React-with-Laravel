import React, { Component } from 'react';

class Myform extends Component {
    state = {
        form: { first_name: '', last_name: '', email: '', isEdit: false },
        btnName: "Save",
        btnClass: "btn btn-outline-primary btn-block"
    }

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)) {
            this.setState({
                form: { ...this.props.customer, isEdit: true },
                btnName: "Update",
                btnClass: "btn btn-outline-warning btn-block"
            });
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    }

    onFormSubmit = e => {
        e.preventDefault();
        
        if(this.formValidate()) {
            //send form data ta app
            this.props.onFormSubmit(this.state.form);
        }
        this.clearFormFields();
    };

    formValidate = () => {
        //first name
        if(document.getElementsByName("first_name")[0].value === "") {
            alert("Enter first name");
            return false;
        }

                //first name
        if(document.getElementsByName("last_name")[0].value === "") {
            alert("Enter last name");
            return false;
        }

                //first name
        if(document.getElementsByName("email")[0].value === "") {
            alert("Enter email");
            return false;
        }

        return true;

    };

    clearFormFields = () => {
        // change form state
        this.setState({
            form: { first_name: '', last_name: '', email: '', isEdit: false }
        });

        // chsnge the button to save
        this.setState({
            btnName:'Save',
            btnClass: "btn btn-outline-primary btn-block"
        })
    

        // clear form fields 
        document.querySelector('form').reset();
    };


    render() {
        return(
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">New Contact</div>
                    <form className="card-body">
                        <div className="form-group">
                            <input type="text" name="first_name" className="form-control" placeholder="First name" onChange={this.handleChange} value={this.state.form.first_name} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="last_name" className="form-control" placeholder="Last name" onChange={this.handleChange} value={this.state.form.last_name} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" placeholder="Email" onChange={this.handleChange} value={this.state.form.email} />
                        </div>
                        <div className="form-group">
                            <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                                {this.state.btnName}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Myform;