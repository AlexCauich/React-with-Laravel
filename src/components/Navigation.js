import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {

        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>

        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>

        )
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand" >
                    {localStorage.usertoken ? userLink : loginRegLink}
                </a>
            </nav>
        )
    }
}
export default Navigation;