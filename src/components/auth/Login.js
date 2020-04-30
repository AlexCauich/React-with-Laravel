import React, { Component } from 'react';
import {login} from './UserFunctions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {

        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(resp => {
            this.props.history.push(`/profile`);
        })

    }
    

    render() {
        return (
            /*<div className="container">    
                <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>        
                <div className="col-md-6 mt-5 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-block">Sign In</button>
                        </form>
                    </div> 
                </div>
            </div>*/

            <div className="Login">
                <div className="Container">
                    <div className="row mt-4">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form className="form-signin" noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-outline-primary btn-block">Sign In</button>
                            </form>
                        </div>
                    </div>  
                </div>
            </div>

        )
    }
}

export default Login;