import React, { Component } from 'react';
import axios from 'axios';

class CreateChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            senderId: props.user._id,
            body: ''
        }
    }
    handleTextArea = (e) => {
        let body = e.target.value
        this.setState({
            body: body
        })
    }
    handleSubmit = (e) => {
        console.log(this.props.user._id)
        e.preventDefault()
        let data = {
            senderId: this.props.user._id,
            body: this.state.body
        }
        console.log("checking user id again:", data.senderId)
        axios.post('api/chat', data)
        .then(res => {
            console.log('chat data sent to server', res)
        }).catch(err => {
            console.log("error returned from axios:", err)
        })
    }
    render() {
        return(
            <div className='chat-input'>
                <h4>Chat</h4>
                <form onSubmit={this.handleSubmit}>
                    <textarea name='chat-body' placeholder='text...' onChange={ this.handleTextArea } />
                    <input type='submit' value='chat' />
                </form>
            </div>
        )
    }
}

export default CreateChat;