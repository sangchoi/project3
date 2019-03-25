import React from 'react';
import PropsFeed from './PropsFeed';
import UserProfile from './UserProfile';
import MyPropsShort from './MyPropsShort'

const HomePage = props => {
    return (
        <div className="homebox">
            <div className="homebox-left">
                <PropsFeed />
            </div>
            <div classNam="homebox-right">
                <div className="profile-short">
                    <UserProfile user={props.user} />
                </div>
                <div className="props-short">
                    <MyPropsShort user={props.user} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;