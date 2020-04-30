import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './auth/Login';
import Profile from './auth/Profile';
import Navbar from './auth/Navbar';
import Register from './auth/Register';

class App extends Component {
    render() {
        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" component={Login} />
                    <div className="container">
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </div>
            </Router>
        )
    }
}
export default App;