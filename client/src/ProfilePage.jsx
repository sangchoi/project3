import React from 'react';
import ProfileLong from './ProfileLong';
import UserProfile from './UserProfile';
import PropsAppBar from './PropsAppBar';
import './ProfilePage.css';

const Profile = props => {
    return (
        <div className='profile-box'>
        <div className="ProfilePageNavDiv">
                <PropsAppBar />
            </div>
            <section className="ProfilePageUserProfile">
                <UserProfile />
            </section>
            <section className="ProfilePageProfileLong">
                <ProfileLong />
            </section>
        </div>
    )
}

export default Profile;