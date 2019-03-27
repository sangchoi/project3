import React from 'react';
import Icon from '@material-ui/core/Icon';

const Props = ({ singleProps, user }) => {
    console.log('is user null?', user)
    if (!user) {
        return (
            <div className="singleProps global">
                <img src="http://via.placeholder.com/50" alt="avatar"/>
                <span className="body" > { singleProps.body } </span>
            </div>
        )
    } else if ( user._id === singleProps.from._id ) {
        return (
            <div className="singleProps incoming">
                <Icon>call_made</Icon>
                <span className="body">Body: { singleProps.body }</span>
                <span>From: { singleProps.from.name }</span>
            </div>
        )
    } else if ( user._id === singleProps.to._id ) {
        return (
            <div className="singleProps outgoing">
                <i>call_received</i>
                <span className="body">Body: { singleProps.body }</span>
                <span>To: { singleProps.to.name }</span>
            </div>
        )
    }
    return (
        <div className="error">
            <span>There was an error</span>
        </div>
    )
}

export default Props;