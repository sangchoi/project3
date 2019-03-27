import React from 'react';

export default function UserProfile({ user, logout }) {
    return (
        <div className="Profile">     
            {/* <button onClick={ logout }>Log Out!</button> */}
            <div className="ProfilePicBox">
            <h2 className="ProfileNameText">{ user.name }'S PROFILE</h2>
            <img src="https://via.placeholder.com/150" alt="user avatar large"/>
            </div>
            <div className="ProfileDetailsBox">
            <p>USER NAME: { user.name }</p>
            <p>USER EMAIL: { user.email }</p>
            <p>USER DEPARTMENT: { user.dep }</p>
            </div>
        </div>
    )
}