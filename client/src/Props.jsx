import React from 'react';

const Props = ({ singleProps, user }) => {
    console.log('user ID', user._id, 'singlePropsFrom', singleProps.from )
    console.log('in the props component', singleProps)
    if ( user._id === singleProps.from._id ) {
        return (
            <div className="singleProps incoming">
                <i>out_arrow_icon</i>
                <span>Body: { singleProps.body }</span>
                <span>From: { singleProps.from.name }</span>
            </div>
        )
    }
    if ( user._id === singleProps.to._id ) {
        return (
            <div className="singleProps outgoing">
                <i>in_arrow</i>
                <span>Body: { singleProps.body }</span>
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