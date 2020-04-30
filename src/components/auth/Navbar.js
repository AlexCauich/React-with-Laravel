import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './style.css';

class Navbar extends Component {
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }

    render() {
        const loginRegLink = (
            <ul>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </ul>

        )

        const userLink = (
            <ul>
                <li>
                    <Link to="/profile">
                        Profile
                    </Link>
                    
                </li>
                <li>
                    <a href="/" onClick={this.logOut.bind(this)}>
                        Logout
                    </a>
                </li>
            </ul>

        )

        return (
            /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Travels</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li>{localStorage.usertoken ? userLink : loginRegLink}</li>
                    </ul>
                </div>
            </nav>*/

            <div className="container">
                <nav className="nav-main">
                    <img src="https://insmac.org/uploads/posts/2018-11/1542978938_artpaper.png" alt="" className="nav-brand"/>
                    <ul className="nav-menu">
                        {localStorage.usertoken ? userLink : loginRegLink}
                    </ul>
                    <ul className="nav-menu-right">
                        <li> 
                            <a href="#" className="fas fa-search"></a>
                        </li>
                    </ul>
                </nav>
                <hr/>
            </div>
            
        )
    }
}

export default withRouter(Navbar);