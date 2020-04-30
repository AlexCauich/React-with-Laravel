import React, { Component } from 'react';
import {getProfile} from './UserFunctions';
import './style.css';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        getProfile().then(resp => {
            this.setState({
                name: resp.user.name,
                email: resp.user.email
            })
        })
    }

    render() {
        return(
            <div className="Profile">
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
                
                <div className="container">
                    <header className="showcase">
                        <h2>Big news Today</h2>
                        <p>lorem30</p>
                        <a className="btn" href="#">Read More <i className="fas fa-angle-double-right"></i></a>
                    </header>

                    <div className="news-card">
                        <div>
                            <img src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/2325307/pexels-photo-2325307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/5943/fashion-coffee-time-lifestyle.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>

                    <section className="cards-banner-one">
                        <div className="content">
                            <h2>Lorem impsum dolor</h2>
                            <p>lorem impsu dolor sit amot consectionar seductorea lorem impsu dolor sit amot consectionar seductorea</p>
                            <a href="#" className="btn">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </section>

                    <div className="news-card">
                        <div>
                            <img src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/2325307/pexels-photo-2325307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/5943/fashion-coffee-time-lifestyle.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="News 1"/>
                            <h3>lorem30lkñl lkkklk</h3>
                            <p>sd sd skdjwekf oewifn ww oiqw oqnqnir iqjojejiw e8r 8qo8fr q infn9 w</p>
                            <a href="#">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>

                    <section className="cards-banner-two">
                        <div className="content">
                            <h2>Lorem impsi Lorem impsiLorem imp Lorem impsi</h2>
                            <p>Lorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsiLorem impsi</p>
                            <a href="#" className="btn">Learn More <i className="fas fa-angle-double-right"></i></a>
                        </div>
                    </section>

                    <section className="social">
                        <p>Follow News</p>
                        <div className="links">
                            <a href="#">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>
                </div>

                <div className="footer-links">
                    <div className="footer-container">
                        <ul>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                        </ul>
                        <ul>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                            <li><a href="#"><h3>Title one</h3></a></li>
                        </ul>
                    </div>
                </div>

                <footer className="footer">
                    <h3>News copyright</h3>
                </footer>
            </div>
        )
    }
}

export default Profile;