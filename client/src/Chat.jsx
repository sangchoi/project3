import React, { Component } from 'react';
import axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        axios.get('api/chat')
        .then(res => {
            this.setState({
                messages: res.data.data
            })
        })
    }
    render() {
        let chatFeed = this.state.messages.map(( message, index) => {
            return <li key={index}>{message}</li>
        })
        return ( 
            <div>
                <ul>
                    {chatFeed}
                </ul>
            </div>
        )
    }
}

export default Chat;
