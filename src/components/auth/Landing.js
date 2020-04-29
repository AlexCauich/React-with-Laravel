import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//import auth
import Login from './Login';
import Register from './Register';
import Profile from './Profile';



//fin import 



class Landing extends Component {
    render() {
        return(
            <Router>
            <div className="App">

                <div className="header-content"> 
                    <h1>Cinque Terre</h1>
                    <h3>Resize the browser window</h3>
                </div>

                <div className="menu-item"> 
                    <div className="menu">
                        <div className="menuitem">The Walk</div>
                        <div className="menuitem">Transport</div>
                        <div className="menuitem">History</div>
                        <div className="menuitem">Gallery</div>
                    </div>

                    <div className="main">
                        <h2>The Walk</h2>
                        <p>The walk from Monterosso to Riomaggiore will take you approximately two hours, give or take an hour depending on the weather conditions and your physical shape.</p>
                        <img className="image-1" src="https://www.w3schools.com/html/img_5terre.jpg"/> 
                    </div>

                    <div className="right">
                        <h2>What?</h2>
                        <p>Cinque Terre comprises five villages: Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore.</p>
                        <h2>Where?</h2>
                        <p>On the northwest cost of the Italian Riviera, north of the city La Spezia.</p>
                        <h2>Price?</h2>
                        <p>The Walk is free!</p>
                    </div>
                </div>


                <div className="footer-template"> This web page is a part of a demonstration of fluid web design made by w3schools.com. Resize the browser window to see the content respond to the resizing.</div> 
            </div>
            </Router>
        )
    }
}

export default Landing;