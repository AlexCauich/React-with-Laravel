import React, { Component } from 'react';
import {getProfile} from './UserFunctions';


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
            <div>{this.state.name}{this.state.email}</div>
            
        )
    }
}

export default Profile;