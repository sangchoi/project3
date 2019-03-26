import React, { Component } from 'react';
import axios from 'axios';

class ProfileForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deps: [],
            dep: '',
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
        let options = this.state.deps.map( dep => <option value={ dep._id } >{ dep.name }</option> )
        return (
            <div className="ProfileForm">
                <h3>Make A Profile</h3>
                <form onSubmit={ this.handleSubmit }>
                    <input onChange={ this.handleInputChange } type="text" placeholder="Enter a photo url here" />
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