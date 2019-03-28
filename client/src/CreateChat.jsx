import React from 'react';

const CreateChat = (props) => {
    return (
        <div>
            <h4>Chat</h4>
            <form onSubmit={props.handleSubmit}>
                <textarea name='chat-body' value={props.body} onChange={ props.handleTextArea } />
                <input type='submit' value='chat' />
            </form>
        </div>
    )
}

export default CreateChat;