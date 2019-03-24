import React, { Component } from 'react';
import './UserDirectory.css';
import axios from 'axios';
import DirectoryEntry from './DirectoryEntry';

class UserDirectory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.goToProfileFromDirectory = this.goToProfileFromDirectory.bind(this)
        this.givePropsFromDirectory = this.givePropsFromDirectory.bind(this)
    }
    // handle users clicking on a directory entry
    goToProfileFromDirectory(e, user) {
        console.log('clicked go to profile from directory, this was the user passed up:', user)

    }
    // handle users clicking on button to give props in directory
    givePropsFromDirectory(e, user) {
        console.log('clicked give props from directory, this was the user passed up:', user)

    }

    componentDidMount() {
        // get all users from db
        axios.get('/api/user')
        .then(res => {
            // upon reply, set the users in state
            this.setState({ 
                users: res.data
            })
        })
    }
    render() {
        // map the users to a list of elements for insertion
        let userList = this.state.users.map((user, i) => {
            return (
                <li  key={ i }  >
                    <DirectoryEntry 
                        user={ user } 
                        goToProfile={ this.goToProfileFromDirectory } 
                        giveProps={ this.givePropsFromDirectory }/>
                </li>
            )
        })
        return (
            <div className="UserDirectory">
                <h1>UserDirectory.jsx</h1>
                <ul>
                    {/* insert user list into page */}
                    { userList }
                </ul>
            </div>
        )
    }
}


export default UserDirectory