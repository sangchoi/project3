import React from 'react';
import ProfileLong from './ProfileLong';
import UserProfile from './UserProfile';

const Profile = props => {
    return (
        <div className='profile-box'>
            <section>
                <UserProfile />
            </section>
            <section>
                <ProfileLong />
            </section>
        </div>
    )
}

export default Profile;