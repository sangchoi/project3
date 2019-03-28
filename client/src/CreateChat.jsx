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
                <h4 className="ChatHeader">CHAT</h4>
                <form className="ChatForm" onSubmit={this.props.handleSubmit}>
                    <textarea className="ChatTextBox" name='chat-body' placeholder='text...' onChange={ this.props.handleTextArea } />
                    
                    <input className="ChatButton" type='submit' value='SUBMIT' />
                </form>
            </div>
        )
    }
}

export default CreateChat;