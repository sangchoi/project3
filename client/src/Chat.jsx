import React, { Component } from 'react';
import axios from 'axios';
import CreateChat from './CreateChat';

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
            return <li key={index}>{message.body}</li>
        })
        console.log(chatFeed)
        return ( 
            <div>
                <ul>
                    {chatFeed}
                    <CreateChat user={this.props.user} />
                </ul>
            </div>
        )
    }
}

export default Chat;
