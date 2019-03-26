import React from 'react';


const ProfileLong = props => {
    return (
        <div className="profile-long">
            <p>Interests: { profile.interests }</p>
            <p>Groups: { profile.groups } </p>
        </div>
    )
}

export default ProfileLong;