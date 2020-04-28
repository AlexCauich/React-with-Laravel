import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
class Navbar extends Component {
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

        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="toggle navigation">
                    <span className="navbar-toggler-item"></span>
                </button>

                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand">Navbar</a>
                        {localStorage.usertoken ? userLink : loginRegLink}
                </nav>
            </div>
            
        )
    }
}

export default withRouter(Navbar);