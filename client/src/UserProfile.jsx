import React from 'react';

export default function UserProfile(props) {
    return (
        <div className="UserProfile">
            <p>Hello, {props.user.name} </p>
            <button onClick={ props.logout }>Log Out!</button>
        </div>
    )
}