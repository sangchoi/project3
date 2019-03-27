import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProfileForm extends Component {
    // props include 'user' from app.jsx
    constructor(props) {
        super(props)
        this.state = {
            deps: [],
            dep: '',
            groups: '',
            interests: '',
            photo: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        // add this user to department
        console.log('/api/deps/' + this.state.dep)
        axios.put('/api/deps/' + this.state.dep, { 
            members: [this.props.user._id],
        })
        // make profile and add it to user
        console.log('/api/profile')
        axios.post('/api/profile', {
            interests: this.state.interests,
            groups: this.state.groups,
            photo: this.state.photo,
            userId: this.props.user._id
        }).then(res => {
            console.log(res)
            this.props.hideProfileForm()
        })

    }

    componentDidMount() {
        axios.get('/api/deps')
        .then(res => {
            console.log('ProfileForm did mount', res)
            this.setState(({
                deps: res.data.data
            }))
        })
    }

    render() {
        let options = this.state.deps.map( (dep, i) => <option value={ dep._id } key={ i } >{ dep.name }</option> )
        return (
            <div className="ProfileForm">
                <h3>Make A Profile</h3>
                <form onSubmit={ this.handleSubmit }>
                    <input name="photo" onChange={ this.handleInputChange } type="text" placeholder="Enter a photo url here" />
                    <br/>
                    <select name="dep" id="dep" onChange={ this.handleInputChange }>
                        <option value="" hidden="hidden">Choose your Community</option>
                        { options }
                    </select>
                    <br/>
                    <input name="interests" onChange={ this.handleInputChange } type="text" placeholder="Enter your interests here"/>
                    <br/>
                    <input name="groups" onChange={ this.handleInputChange } type="text" placeholder="Enter your groups here"/>
                    <br/>
                    <input onChange={ this.handleInputChange } type="submit" value="done" />
                </form>
            </div>
        )
    }
}

export default ProfileForm;