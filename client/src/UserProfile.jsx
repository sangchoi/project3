import React from 'react';

export default function UserProfile({ user, logout }) {
    return (
        <div className="Profile">     
            {/* <button onClick={ logout }>Log Out!</button> */}
            <div className="ProfilePicBox">
            <h2>{ user.name }'s Profile</h2>
            <img src="https://via.placeholder.com/150" alt="user avatar large"/>
            </div>
            <div className="ProfileDetailsBox">
            <p>User name: { user.name }</p>
            <p>User email: { user.email }</p>
            <p>User department: { user.dep }</p>
            </div>
        </div>
    )
}