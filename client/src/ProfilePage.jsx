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
            {/* <div className="ProfilePageBox"> */}
            <section className="ProfilePageUserProfile">
                <UserProfile user={ props.user }/>
            </section>
            <section className="ProfilePageProfileLong">
                <ProfileLong user={ props.user }/>
            </section>
        </div>
        // </div>
    )
}

export default Profile;