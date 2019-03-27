import React from 'react';
import { Link } from 'react-router-dom';

const PropsAppBar = props => {
    return (
        <div className="PropsAppBar" style={{display:'flex'}}>
            <Link to='/home'>
                <button className="NavButton">Home</button>
            </Link>
            <Link to='/profile'>
                <button className="NavButton">Profile</button>
            </Link>
            <Link to='/community'>
                <button className="NavButton">Community</button>
            </Link>
            <Link to='/setup'>
                <button className="NavButton">Setup</button>
            </Link>
            <Link to='/logout'>
                <button className="NavButton">Logout</button>
            </Link>
        </div>
    )
}

export default PropsAppBar;