import React, { Component } from 'react';
import './UserDirectory.css';

class UserDirectory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    render() {
        return (
            <div className="UserDirectory">
                <h1>UserDirectory.jsx</h1>
                <ul>
                    <li>I am a user, I am on INSERT_TEAM_HERE and I am interested in scalable computing infrastructure</li>
                    <li>I am also a user, and I am in accounting. My name is Kevin</li>
                    <li>User 21642: <em>I am a robot... you will be assimilated... resistance is futile...</em></li>
                </ul>
            </div>
        )
    }
}


export default UserDirectory