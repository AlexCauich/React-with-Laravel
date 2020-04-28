import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

//import auth
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Home from './Home'



//fin import 


class Landing extends Component {
    render() {
        return(
            <Router>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/home" component={Home}/>
                    
                </div>
            </div>
            </Router>
        )
    }
}

export default Landing;