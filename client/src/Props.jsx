import React from 'react';

const Props = ({ singleProps, user }) => {
    console.log('user ID', user._id, 'singlePropsFrom', singleProps.from )
    if ( user._id === singleProps.from ) {
        return (
            <div className="singleProps incoming">
                <i>in_arrow</i>
                <span>Body: { singleProps.body }</span>
                <span>From: { singleProps.from }</span>
            </div>
        )
    }
    if ( user._id === singleProps.to ) {
        return (
            <div className="singleProps outgoing">
                <i>out_arrow</i>
                <span>Body: { singleProps.body }</span>
                <span>To: { singleProps.to }</span>
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