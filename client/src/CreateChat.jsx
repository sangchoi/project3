import React, { Component } from 'react';
import axios from 'axios';

class CreateChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return(
            <div className='chat-input'>
                <h4>Chat</h4>
                <form onSubmit={this.props.handleSubmit}>
                    <textarea name='chat-body' placeholder='text...' onChange={ this.props.handleTextArea } />
                    <input type='submit' value='chat' />
                </form>
            </div>
        )
    }
}

export default CreateChat;