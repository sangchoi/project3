import React, { Component } from 'react';
import axios from 'axios';
import CreateChat from './CreateChat';
import './Chat.css';

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
        this.getMessages()
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
    clearTextArea = () => {
        let body = this.state.body
        this.state.onSearchTermChange(body)
        this.setState({
            body: ''
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            senderId: this.props.user._id,
            body: this.state.body
        }
        axios.post('/api/chat', data)
        .then(res => {
            this.getMessages()
            this.clearTextArea()
        }).catch(err => {
            console.log("error returned from axios:", err)
        })
    }
    getMessages = () => {
        axios.get('/api/chat')
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
            <>
            <div className='chat-feed'>
                <ul>
                    {chatFeed}
                </ul>
            </div>
            <div className='chat-input'>
                    <CreateChat user={this.props.user} handleSubmit={this.handleSubmit} handleTextArea={this.handleTextArea} body={this.state.body} />
            </div>
            </>
        )
    }
}

export default Chat;
