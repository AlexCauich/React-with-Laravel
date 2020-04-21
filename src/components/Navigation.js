import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand" >
                    {this.props.title}
                </a>
            </nav>
        )
    }
}
export default Navigation;