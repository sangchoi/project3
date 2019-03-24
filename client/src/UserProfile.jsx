import React from 'react';

export default function UserProfile({ user }) {
    return (
        <div className="Profile">     
            <h2>Profile</h2>
            <img src="https://via.placeholder.com/150" alt="user avatar large"/>
            <p>User name: { user.name }</p>
            <p>User email: { user.email }</p>
            <p>User department: { user.dep }</p>
        </div>
    )
}