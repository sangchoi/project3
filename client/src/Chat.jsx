import React, { Component } from 'react';
import axios from 'axios';
import CreateChat from './CreateChat';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            senderId: props.user._id,
            body: '',
            pollingInterval: null
        }
    }
    componentDidMount() {
        let pollingInterval = setInterval(this.getMessages, 1000)
        this.setState({
            pollingInterval
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.pollingInterval)
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
        axios.post('/api/chat', data)
        .then(res => {
            console.log('chat data sent to server', res)
            this.getMessages()
        }).catch(err => {
            console.log("error returned from axios:", err)
        })
    }
    getMessages = () => {
        axios.get('/api/chat')
            .then(res => {
                this.setState({
                    messages: res.data.data
                });
            });
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
                    <CreateChat user={this.props.user} handleSubmit={this.handleSubmit} handleTextArea={this.handleTextArea}  />
                </ul>
            </div>
        )
    }
}

export default Chat;
