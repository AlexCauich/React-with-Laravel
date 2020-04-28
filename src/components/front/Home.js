import React, { Component } from 'react';
import './style.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

//import auth
/*import Login from '../auth/Login';
import Register from '../auth/Register';
import Profile from '../auth/Profile';*/

//fin import 
import Navbar from '../auth/Navbar';
import Login from '../auth/Login';
import Profile from '../auth/Profile';


class Home extends Component {
    render() {
        return(
            <Router>
            <div className="App">
            <Navbar />
                <div class="image d-flex justify-content-center mt-2">
                    <div className="content col-md-4 col-lg-4 col-sm-3">
                        <img className="image-1 mt-2" src="https://d500.epimg.net/cincodias/imagenes/2019/12/24/lifestyle/1577177486_105469_1577177536_noticia_normal.jpg" alt="image"></img>
                    </div>
                </div>
                <div className="container">
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <div className="row mt-3">
                        <div className="lat-1 col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4>People</h4>
                                </div>
                            </div>
                        </div>
                        <div className="lat-2 col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h6>News</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        )
    }
}

export default Home;